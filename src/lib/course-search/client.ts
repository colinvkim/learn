type CourseSearchIndex = {
  course: {
    id: string;
    title: string;
  };
  lessons: CourseSearchLesson[];
};

type CourseSearchLesson = {
  order: number;
  slug: string;
  title: string;
  description: string;
  href: string;
  body: string;
};

type SearchResult = CourseSearchLesson & {
  score: number;
  snippet: string;
};

declare global {
  interface Window {
    __learnCourseSearchController?: boolean;
  }
}

const MAX_RESULTS = 8;
const SNIPPET_RADIUS = 72;
const CLOSE_ANIMATION_MS = 130;
let restoreFocusElement: HTMLElement | null = null;
let closeAnimationTimeout: number | null = null;

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function tokenize(query: string) {
  return normalize(query).split(" ").filter(Boolean);
}

function countMatches(haystack: string, terms: string[]) {
  return terms.reduce((count, term) => {
    return haystack.includes(term) ? count + 1 : count;
  }, 0);
}

function getSnippet(lesson: CourseSearchLesson, terms: string[]) {
  const source = lesson.body || lesson.description;
  const normalizedSource = normalize(source);
  const term = terms.find((candidate) => normalizedSource.includes(candidate));

  if (!term) {
    return lesson.description;
  }

  const index = normalizedSource.indexOf(term);
  const start = Math.max(0, index - SNIPPET_RADIUS);
  const end = Math.min(source.length, index + term.length + SNIPPET_RADIUS);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < source.length ? "..." : "";

  return `${prefix}${source.slice(start, end).trim()}${suffix}`;
}

function scoreLesson(lesson: CourseSearchLesson, terms: string[]) {
  const title = normalize(lesson.title);
  const description = normalize(lesson.description);
  const body = normalize(lesson.body);
  const titleMatches = countMatches(title, terms);
  const descriptionMatches = countMatches(description, terms);
  const bodyMatches = countMatches(body, terms);
  const allTermsMatched = terms.every((term) => {
    return title.includes(term) || description.includes(term) || body.includes(term);
  });

  if (!allTermsMatched) {
    return 0;
  }

  return titleMatches * 24 + descriptionMatches * 10 + bodyMatches * 3;
}

function searchLessons(index: CourseSearchIndex, query: string): SearchResult[] {
  const terms = tokenize(query);

  if (terms.length === 0) {
    return index.lessons.slice(0, MAX_RESULTS).map((lesson) => ({
      ...lesson,
      score: 0,
      snippet: lesson.description,
    }));
  }

  return index.lessons
    .map((lesson) => ({
      ...lesson,
      score: scoreLesson(lesson, terms),
      snippet: getSnippet(lesson, terms),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, MAX_RESULTS);
}

function getSearchRoot(element: Element | null) {
  const root = element?.closest("[data-course-search]");
  return root instanceof HTMLElement ? root : null;
}

function querySearchElement(root: HTMLElement, selector: string) {
  return root.querySelector(selector) ?? document.querySelector(selector);
}

function querySearchElements(root: HTMLElement, selector: string) {
  const scopedElements = [...root.querySelectorAll(selector)];
  return scopedElements.length > 0
    ? scopedElements
    : [...document.querySelectorAll(selector)];
}

function getIndex(root: HTMLElement): CourseSearchIndex | null {
  const script = querySearchElement(root, "[data-course-search-index]");

  if (!(script instanceof HTMLScriptElement)) {
    return null;
  }

  try {
    return JSON.parse(script.textContent ?? "") as CourseSearchIndex;
  } catch {
    return null;
  }
}

function getResultLinks(root: HTMLElement) {
  return querySearchElements(root, "[data-course-search-result]")
    .filter((element): element is HTMLAnchorElement => element instanceof HTMLAnchorElement);
}

function setActiveResult(root: HTMLElement, activeIndex: number) {
  const links = getResultLinks(root);

  links.forEach((link, index) => {
    const isActive = index === activeIndex;
    link.dataset.active = isActive ? "true" : "false";
    link.setAttribute("aria-selected", String(isActive));
  });
}

function getActiveIndex(root: HTMLElement) {
  return getResultLinks(root).findIndex((link) => link.dataset.active === "true");
}

function getShortcutLabel() {
  return /Mac|iPhone|iPad|iPod/.test(window.navigator.platform)
    ? "⌘K"
    : "Ctrl + K";
}

function updateShortcutLabels() {
  document.querySelectorAll("[data-course-search-shortcut]").forEach((element) => {
    if (element instanceof HTMLElement) {
      element.textContent = getShortcutLabel();
    }
  });
}

function renderResults(root: HTMLElement) {
  const index = getIndex(root);
  const input = querySearchElement(root, "[data-course-search-input]");
  const resultsRoot = querySearchElement(root, "[data-course-search-results]");
  const template = querySearchElement(root, "[data-course-search-result-template]");
  const empty = querySearchElement(root, "[data-course-search-empty]");

  if (
    !index ||
    !(input instanceof HTMLInputElement) ||
    !(resultsRoot instanceof HTMLElement) ||
    !(template instanceof HTMLTemplateElement)
  ) {
    return;
  }

  const results = searchLessons(index, input.value);
  resultsRoot.replaceChildren();

  if (empty instanceof HTMLElement) {
    empty.hidden = results.length > 0;
    empty.classList.toggle("hidden", results.length > 0);
  }

  results.forEach((result, index) => {
    const fragment = template.content.cloneNode(true);

    if (!(fragment instanceof DocumentFragment)) {
      return;
    }

    const link = fragment.querySelector("[data-course-search-result]");
    const title = fragment.querySelector("[data-course-search-result-title]");
    const order = fragment.querySelector("[data-course-search-result-order]");
    const snippet = fragment.querySelector("[data-course-search-result-snippet]");

    if (link instanceof HTMLAnchorElement) {
      link.href = result.href;
      link.dataset.active = index === 0 ? "true" : "false";
      link.setAttribute("aria-selected", String(index === 0));
    }

    if (title instanceof HTMLElement) {
      title.textContent = result.title;
    }

    if (order instanceof HTMLElement) {
      order.textContent = `${result.order}`;
    }

    if (snippet instanceof HTMLElement) {
      snippet.textContent = result.snippet;
    }

    resultsRoot.appendChild(fragment);
  });
}

function setModalOpen(root: HTMLElement, isOpen: boolean) {
  const modal = querySearchElement(root, "[data-course-search-modal]");
  const trigger = querySearchElement(root, "[data-course-search-trigger]");

  if (!(modal instanceof HTMLElement) || !(trigger instanceof HTMLButtonElement)) {
    return;
  }

  trigger.setAttribute("aria-expanded", String(isOpen));

  if (closeAnimationTimeout !== null) {
    window.clearTimeout(closeAnimationTimeout);
    closeAnimationTimeout = null;
  }

  if (isOpen) {
    modal.classList.remove("hidden", "is-closing");
    document.documentElement.classList.add("overflow-hidden");
    return;
  }

  if (modal.classList.contains("hidden")) {
    document.documentElement.classList.remove("overflow-hidden");
    return;
  }

  modal.classList.add("is-closing");
  closeAnimationTimeout = window.setTimeout(() => {
    if (modal.classList.contains("is-closing")) {
      modal.classList.add("hidden");
      modal.classList.remove("is-closing");
      document.documentElement.classList.remove("overflow-hidden");
    }

    closeAnimationTimeout = null;
  }, CLOSE_ANIMATION_MS);
}

function openSearch(root: HTMLElement) {
  const input = querySearchElement(root, "[data-course-search-input]");

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const activeElement = document.activeElement;

  if (activeElement instanceof HTMLElement) {
    restoreFocusElement = activeElement;
  }

  setModalOpen(root, true);
  renderResults(root);
  window.setTimeout(() => input.focus(), 0);
}

function closeSearch(root: HTMLElement) {
  const trigger = querySearchElement(root, "[data-course-search-trigger]");

  setModalOpen(root, false);

  if (restoreFocusElement) {
    restoreFocusElement.focus();
  } else if (trigger instanceof HTMLButtonElement) {
    trigger.focus();
  }

  restoreFocusElement = null;
}

function toggleSearch(root: HTMLElement) {
  const modal = querySearchElement(root, "[data-course-search-modal]");
  const isOpen = modal instanceof HTMLElement &&
    !modal.classList.contains("hidden") &&
    !modal.classList.contains("is-closing");

  if (isOpen) {
    closeSearch(root);
    return;
  }

  openSearch(root);
}

function handleResultNavigation(root: HTMLElement, direction: 1 | -1) {
  const links = getResultLinks(root);

  if (links.length === 0) {
    return;
  }

  const activeIndex = getActiveIndex(root);
  const nextIndex = activeIndex === -1
    ? 0
    : (activeIndex + direction + links.length) % links.length;

  setActiveResult(root, nextIndex);
  links[nextIndex]?.scrollIntoView({ block: "nearest" });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const trigger = event.target.closest("[data-course-search-trigger]");

    if (trigger instanceof HTMLButtonElement) {
      const root = getSearchRoot(trigger);
      if (root) toggleSearch(root);
      return;
    }

    const closer = event.target.closest(
      "[data-course-search-close], [data-course-search-backdrop]",
    );

    if (closer instanceof HTMLElement) {
      const root = getSearchRoot(closer);
      if (root) closeSearch(root);
      return;
    }

    const result = event.target.closest("[data-course-search-result]");

    if (result instanceof HTMLAnchorElement) {
      const root = getSearchRoot(result);
      if (root) closeSearch(root);
    }
  });

  document.addEventListener("input", (event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    if (!event.target.matches("[data-course-search-input]")) {
      return;
    }

    const root = getSearchRoot(event.target);
    if (root) renderResults(root);
  });

  document.addEventListener("keydown", (event) => {
    const isCommandSearch = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

    if (isCommandSearch) {
      const root = document.querySelector("[data-course-search]");
      if (root instanceof HTMLElement) {
        event.preventDefault();
        toggleSearch(root);
      }
      return;
    }

    const activeRoot = [...document.querySelectorAll("[data-course-search]")]
      .find((root): root is HTMLElement => {
        const modal = querySearchElement(root, "[data-course-search-modal]");
        return root instanceof HTMLElement &&
          modal instanceof HTMLElement &&
          !modal.classList.contains("hidden");
      });

    if (!activeRoot) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch(activeRoot);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      handleResultNavigation(activeRoot, 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      handleResultNavigation(activeRoot, -1);
      return;
    }

    if (event.key === "Enter") {
      const links = getResultLinks(activeRoot);
      const activeIndex = getActiveIndex(activeRoot);
      const activeLink = links[activeIndex] ?? links[0];

      if (activeLink) {
        event.preventDefault();
        activeLink.click();
      }
    }
  });

  document.addEventListener("astro:page-load", () => {
    document
      .querySelectorAll("[data-course-search]")
      .forEach((root) => root instanceof HTMLElement && renderResults(root));
  });
}

export function initCourseSearch() {
  if (window.__learnCourseSearchController) {
    updateShortcutLabels();
    document
      .querySelectorAll("[data-course-search]")
      .forEach((root) => root instanceof HTMLElement && renderResults(root));
    return;
  }

  window.__learnCourseSearchController = true;
  updateShortcutLabels();
  bindEvents();
  document
    .querySelectorAll("[data-course-search]")
    .forEach((root) => root instanceof HTMLElement && renderResults(root));
}
