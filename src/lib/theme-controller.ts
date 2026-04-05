(() => {
  const storageKey = "learn-theme";
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const getStoredTheme = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return null;
  };

  const getResolvedTheme = () => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return prefersDark.matches ? "dark" : "light";
  };

  const syncToggles = () => {
    const isDark = root.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const label = button.querySelector("[data-theme-label]");
      const darkIcon = button.querySelector("[data-theme-icon-dark]");
      const lightIcon = button.querySelector("[data-theme-icon-light]");

      if (label) {
        label.textContent = nextTheme === "dark" ? "Dark" : "Light";
      }

      darkIcon?.classList.toggle("hidden", nextTheme !== "dark");
      lightIcon?.classList.toggle("hidden", nextTheme !== "light");
    });
  };

  const applyTheme = (theme, persist = true) => {
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    if (persist) {
      localStorage.setItem(storageKey, theme);
    }

    syncToggles();
  };

  const restoreTheme = () => {
    applyTheme(getResolvedTheme(), false);
  };

  const toggleTheme = (event) => {
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    const update = () => applyTheme(nextTheme);

    if (typeof document.startViewTransition === "function") {
      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;

      root.dataset.themeTransition = "true";
      root.style.setProperty("--theme-transition-x", `${x}px`);
      root.style.setProperty("--theme-transition-y", `${y}px`);

      const transition = document.startViewTransition(update);
      transition.finished.finally(() => {
        delete root.dataset.themeTransition;
        root.style.removeProperty("--theme-transition-x");
        root.style.removeProperty("--theme-transition-y");
      });
      return;
    }

    update();
  };

  if (!window.__learnThemeController) {
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest("[data-theme-toggle]")) return;
      toggleTheme(event);
    });

    document.addEventListener("astro:after-swap", restoreTheme);
    document.addEventListener("astro:page-load", syncToggles);

    prefersDark.addEventListener("change", (event) => {
      if (getStoredTheme()) return;
      applyTheme(event.matches ? "dark" : "light", false);
    });

    window.__learnThemeController = { restoreTheme, syncToggles };
  }

  restoreTheme();
})();
