const getStoredTheme = (): string => localStorage.getItem("theme") ?? "";
const setStoredTheme = (theme: string) => localStorage.setItem("theme", theme);

const getPreferredTheme = (): string => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme: string) => {
  if (theme === "auto") {
    document.documentElement.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

const showActiveTheme = (theme: string, focus = false) => {
  const themeSwitcher = document.querySelector("#bd-theme");
  if (!themeSwitcher) {
    return;
  }

  const themeSwitcherText = document.querySelector("#bd-theme-text");
  if (!themeSwitcherText) return;
  const activeThemeIcon = document.querySelector(".theme-icon-active use");
  if (!activeThemeIcon) return;
  const btnToActive = document.querySelector(
    `[data-bs-theme-value="${theme}"]`,
  ) as HTMLElement | null;
  if (!btnToActive) return;

  const svgOfActiveBtn = btnToActive
    ?.querySelector("svg use")
    ?.getAttribute("href");
  if (!svgOfActiveBtn) return;

  document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
    element.classList.remove("active");
    element.setAttribute("aria-pressed", "false");
  });

  btnToActive.classList.add("active");
  btnToActive.setAttribute("aria-pressed", "true");
  activeThemeIcon.setAttribute("href", svgOfActiveBtn);
  const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset?.bsThemeValue})`;
  themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

  if (focus) {
    (themeSwitcher as HTMLElement).focus();
  }
};

setTheme(getPreferredTheme());

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== "light" && storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  });

window.addEventListener("DOMContentLoaded", () => {
  showActiveTheme(getPreferredTheme());

  document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const theme = toggle.getAttribute("data-bs-theme-value") || "light";
      setStoredTheme(theme);
      setTheme(theme);
      showActiveTheme(theme, true);
    });
  });
});

export {
  getStoredTheme,
  setStoredTheme,
  getPreferredTheme,
  setTheme,
  showActiveTheme,
};
