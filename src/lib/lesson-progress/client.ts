import {
  LESSON_PROGRESS_STORAGE_KEY,
  LESSON_STATUS_VALUES,
  getLessonProgressSummary,
  readLessonProgressState,
  recordQuizAttempt,
  resetLessonProgress,
  setLessonStatus,
  type LessonStatus,
} from "./store";

type LessonContext = {
  courseId: string;
  lessonSlug: string;
  root: HTMLElement;
};

declare global {
  interface Window {
    __learnLessonProgressEnhancer?: boolean;
  }
}

const STATUS_LABELS: Record<LessonStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

const STATUS_TONES: Record<LessonStatus, string> = {
  "not-started": "neutral",
  "in-progress": "active",
  completed: "complete",
};

const WRONG_FEEDBACK_TIMEOUT_MS = 1600;

function getLessonContext(element: Element | null): LessonContext | null {
  const root = element?.closest("[data-lesson-root]");

  if (!(root instanceof HTMLElement)) {
    return null;
  }

  const { courseId, lessonSlug } = root.dataset;

  if (!courseId || !lessonSlug) {
    return null;
  }

  return {
    courseId,
    lessonSlug,
    root,
  };
}

function getLessonQuizIds(root: ParentNode) {
  const quizIds = new Set<string>();

  root.querySelectorAll("[data-quiz-id]").forEach((element) => {
    if (!(element instanceof HTMLElement) || !element.dataset.quizId) {
      return;
    }

    quizIds.add(element.dataset.quizId);
  });

  return [...quizIds];
}

function setStatusText(panel: HTMLElement, status: LessonStatus) {
  const badge = panel.querySelector("[data-lesson-status-badge]");
  const summary = panel.querySelector("[data-lesson-status-summary]");

  if (badge instanceof HTMLElement) {
    badge.dataset.statusTone = STATUS_TONES[status];
    badge.textContent = STATUS_LABELS[status];
  }

  if (!(summary instanceof HTMLElement)) {
    return;
  }

  if (status === "completed") {
    summary.textContent = "Marked complete.";
    return;
  }

  if (status === "in-progress") {
    summary.textContent = "You’ve started this lesson.";
    return;
  }

  summary.textContent = "Mark the lesson manually or answer the quick checks to track progress.";
}

function updateLessonPanel(panel: HTMLElement) {
  const context = getLessonContext(panel);

  if (!context) {
    return;
  }

  const quizIds = getLessonQuizIds(context.root);
  const summary = getLessonProgressSummary(
    context.courseId,
    context.lessonSlug,
    quizIds,
  );
  const quizSection = panel.querySelector("[data-lesson-quiz-summary]");
  const progressValue = panel.querySelector("[data-lesson-quiz-progress]");
  const progressBar = panel.querySelector("[data-lesson-quiz-bar]");
  const resetButton = panel.querySelector("[data-reset-lesson-progress]");

  panel.dataset.status = summary.status;
  setStatusText(panel, summary.status);

  panel.querySelectorAll("[data-status-option]").forEach((element) => {
    if (!(element instanceof HTMLButtonElement)) {
      return;
    }

    const isSelected = element.dataset.statusOption === summary.status;
    element.dataset.selected = isSelected ? "true" : "false";
    element.setAttribute("aria-pressed", String(isSelected));
  });

  if (quizSection instanceof HTMLElement) {
    quizSection.hidden = summary.quizCount === 0;
  }

  if (progressValue instanceof HTMLElement) {
    progressValue.textContent =
      summary.quizCount === 0
        ? "No quick checks in this lesson."
        : `${summary.completedQuizCount} of ${summary.quizCount} quick checks completed`;
  }

  if (progressBar instanceof HTMLElement) {
    const completion =
      summary.quizCount === 0 ? 0 : (summary.completedQuizCount / summary.quizCount) * 100;
    progressBar.style.width = `${completion}%`;
  }

  if (resetButton instanceof HTMLButtonElement) {
    resetButton.hidden = !summary.hasActivity;
  }
}

function resetQuizUI(quiz: HTMLElement) {
  quiz.dataset.state = "idle";

  const feedback = quiz.querySelector("[data-quiz-feedback]");
  const explanation = quiz.querySelector("[data-quiz-explanation]");

  if (feedback instanceof HTMLElement) {
    feedback.dataset.tone = "neutral";
    feedback.hidden = true;
    feedback.textContent = "";
  }

  if (explanation instanceof HTMLElement) {
    explanation.hidden = true;
  }

  quiz.querySelectorAll("[data-quiz-option]").forEach((element) => {
    if (!(element instanceof HTMLButtonElement)) {
      return;
    }

    element.disabled = false;
    element.dataset.state = "idle";
    element.setAttribute("aria-checked", "false");
    element.setAttribute("aria-disabled", "false");
  });
}

function markQuizCompleted(quiz: HTMLElement, correctIndex: number) {
  quiz.dataset.state = "completed";

  const feedback = quiz.querySelector("[data-quiz-feedback]");
  const explanation = quiz.querySelector("[data-quiz-explanation]");

  if (feedback instanceof HTMLElement) {
    feedback.hidden = false;
    feedback.dataset.tone = "success";
    feedback.textContent = "Correct. Progress saved.";
  }

  if (explanation instanceof HTMLElement) {
    explanation.hidden = false;
  }

  quiz.querySelectorAll("[data-quiz-option]").forEach((element) => {
    if (!(element instanceof HTMLButtonElement)) {
      return;
    }

    const optionIndex = Number(element.dataset.quizOption);
    const isCorrect = optionIndex === correctIndex;

    element.disabled = true;
    element.setAttribute("aria-checked", String(isCorrect));
    element.setAttribute("aria-disabled", "true");
    element.dataset.state = isCorrect ? "correct" : "locked";
  });
}

function updateQuiz(quiz: HTMLElement) {
  const context = getLessonContext(quiz);
  const quizId = quiz.dataset.quizId;
  const correctIndex = Number(quiz.dataset.correctIndex);

  if (!context || !quizId || Number.isNaN(correctIndex)) {
    return;
  }

  const summary = readLessonProgressState();
  const lessonKey = `${context.courseId}:${context.lessonSlug}`;
  const record = summary.lessons[lessonKey];
  const quizRecord = record?.quizzes[quizId];

  resetQuizUI(quiz);

  if (quizRecord?.completedAt) {
    markQuizCompleted(quiz, correctIndex);
  }
}

function updateSidebar(sidebar: HTMLElement) {
  const courseId = sidebar.dataset.courseId;

  if (!courseId) {
    return;
  }

  const allState = readLessonProgressState();
  let completedCount = 0;
  let startedCount = 0;

  sidebar.querySelectorAll("[data-lesson-link]").forEach((element) => {
    if (!(element instanceof HTMLAnchorElement)) {
      return;
    }

    const lessonSlug = element.dataset.lessonLink;
    const marker = element.querySelector("[data-lesson-marker]");

    if (!lessonSlug || !(marker instanceof HTMLElement)) {
      return;
    }

    const lessonRecord = allState.lessons[`${courseId}:${lessonSlug}`];
    const status = lessonRecord?.status ?? "not-started";

    if (status === "completed") {
      completedCount += 1;
      startedCount += 1;
    } else if (status === "in-progress") {
      startedCount += 1;
    }

    marker.hidden = status === "not-started";
    marker.dataset.status = status;
    marker.textContent = status === "completed" ? "Complete" : "Started";
  });

  const totalLessons = sidebar.querySelectorAll("[data-lesson-link]").length;
  const progressCount = sidebar.querySelector("[data-course-progress-count]");
  const progressCaption = sidebar.querySelector("[data-course-progress-caption]");
  const progressBar = sidebar.querySelector("[data-course-progress-bar]");

  if (progressCount instanceof HTMLElement) {
    progressCount.textContent = `${completedCount}/${totalLessons}`;
  }

  if (progressCaption instanceof HTMLElement) {
    if (completedCount === totalLessons && totalLessons > 0) {
      progressCaption.textContent = "All lessons marked complete.";
    } else if (completedCount > 0 && startedCount === completedCount) {
      progressCaption.textContent = `${completedCount} lesson${completedCount === 1 ? "" : "s"} complete`;
    } else if (completedCount > 0) {
      const inProgressCount = startedCount - completedCount;
      progressCaption.textContent =
        `${completedCount} complete, ${inProgressCount} in progress`;
    } else if (startedCount > 0) {
      progressCaption.textContent = `${startedCount} lesson${startedCount === 1 ? "" : "s"} started`;
    } else {
      progressCaption.textContent = "No lessons started yet.";
    }
  }

  if (progressBar instanceof HTMLElement) {
    const completion = totalLessons === 0 ? 0 : (completedCount / totalLessons) * 100;
    progressBar.style.width = `${completion}%`;
  }
}

function updateAll() {
  document
    .querySelectorAll("[data-lesson-progress]")
    .forEach((element) => element instanceof HTMLElement && updateLessonPanel(element));

  document
    .querySelectorAll("[data-quiz]")
    .forEach((element) => element instanceof HTMLElement && updateQuiz(element));

  document
    .querySelectorAll("[data-sidebar-progress]")
    .forEach((element) => element instanceof HTMLElement && updateSidebar(element));
}

function handleStatusSelection(button: HTMLButtonElement) {
  const context = getLessonContext(button);
  const status = button.dataset.statusOption as LessonStatus | undefined;

  if (!context || !status || !LESSON_STATUS_VALUES.includes(status)) {
    return;
  }

  setLessonStatus(context.courseId, context.lessonSlug, status);
  updateAll();
}

function showIncorrectFeedback(quiz: HTMLElement, option: HTMLButtonElement) {
  const feedback = quiz.querySelector("[data-quiz-feedback]");

  option.dataset.state = "incorrect";

  if (feedback instanceof HTMLElement) {
    feedback.hidden = false;
    feedback.dataset.tone = "warning";
    feedback.textContent = "Not quite. Re-read the section above and try again.";
  }

  window.setTimeout(() => {
    if (quiz.dataset.state === "completed") {
      return;
    }

    option.dataset.state = "idle";

    if (feedback instanceof HTMLElement) {
      feedback.hidden = true;
      feedback.textContent = "";
      feedback.dataset.tone = "neutral";
    }
  }, WRONG_FEEDBACK_TIMEOUT_MS);
}

function handleQuizSelection(option: HTMLButtonElement) {
  const quiz = option.closest("[data-quiz]");
  const context = getLessonContext(option);

  if (!(quiz instanceof HTMLElement) || !context) {
    return;
  }

  if (quiz.dataset.state === "completed") {
    return;
  }

  const quizId = quiz.dataset.quizId;
  const correctIndex = Number(quiz.dataset.correctIndex);
  const selectedIndex = Number(option.dataset.quizOption);

  if (!quizId || Number.isNaN(correctIndex) || Number.isNaN(selectedIndex)) {
    return;
  }

  const lessonQuizIds = getLessonQuizIds(context.root);
  const isCorrect = selectedIndex === correctIndex;

  recordQuizAttempt(
    context.courseId,
    context.lessonSlug,
    quizId,
    isCorrect,
    lessonQuizIds,
  );

  if (isCorrect) {
    updateAll();
    return;
  }

  updateAll();
  showIncorrectFeedback(quiz, option);
}

function handleReset(button: HTMLButtonElement) {
  const context = getLessonContext(button);

  if (!context) {
    return;
  }

  resetLessonProgress(context.courseId, context.lessonSlug);
  updateAll();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const statusButton = event.target.closest("[data-status-option]");

    if (statusButton instanceof HTMLButtonElement) {
      handleStatusSelection(statusButton);
      return;
    }

    const quizOption = event.target.closest("[data-quiz-option]");

    if (quizOption instanceof HTMLButtonElement) {
      handleQuizSelection(quizOption);
      return;
    }

    const resetButton = event.target.closest("[data-reset-lesson-progress]");

    if (resetButton instanceof HTMLButtonElement) {
      handleReset(resetButton);
    }
  });

  document.addEventListener("astro:page-load", updateAll);

  window.addEventListener("storage", (event) => {
    if (event.key === LESSON_PROGRESS_STORAGE_KEY) {
      updateAll();
    }
  });
}

export function initLessonProgressEnhancer() {
  if (window.__learnLessonProgressEnhancer) {
    updateAll();
    return;
  }

  window.__learnLessonProgressEnhancer = true;
  bindEvents();
  updateAll();
}
