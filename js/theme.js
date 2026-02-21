// APPLY THEME ON PAGE LOAD
(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
})();


function setTheme(theme) {
  const root = document.documentElement;

  if (theme === "cyan") {
    root.style.setProperty("--accent", "#22d3ee");
  }
  if (theme === "purple") {
    root.style.setProperty("--accent", "#a855f7");
  }
  if (theme === "red") {
    root.style.setProperty("--accent", "#ef4444");
  }

  // SAVE THEME
  localStorage.setItem("theme", theme);
}