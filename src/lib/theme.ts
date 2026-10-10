export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const themeColors: Record<Theme, string> = {
  light: "#f8f7f4",
  dark: "#111113",
};

// Runs before first paint so the stored or system theme is applied without a flash.
export const themeInitScript = `(function(){try{var d=document.documentElement;var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s==="light"||s==="dark"?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");d.dataset.theme=t;d.classList.add("js")}catch(e){document.documentElement.dataset.theme="light"}})();`;
