const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "night") {
  document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "night" : "day",
  );
});
