const toggleButton = document.getElementById("togglebutton");
const nav = document.querySelector("nav");
nav.classList.add("toggler");

toggleButton.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.contains("toggler")
    ? nav.classList.remove("toggler")
    : nav.classList.add("toggler");
});
