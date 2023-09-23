let darkMode = true;

const buttonToglle = document.getElementById("toglle-mode");

buttonToglle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light");

  const mode = darkMode ? "light" : "dark";

  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode ativado`;
  darkMode = !darkMode;
});
