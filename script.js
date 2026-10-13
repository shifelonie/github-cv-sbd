const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filter-button");
const keys = document.querySelectorAll(".key");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    keys.forEach((key) => {
      const matches = filter === "all" || key.dataset.category === filter;
      key.classList.toggle("is-hidden", !matches);
    });
  });
});

const copyButton = document.querySelector(".copy-email");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    const original = copyButton.innerHTML;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.innerHTML = "Copied <span>✓</span>";
    } catch {
      copyButton.innerHTML = "Select email <span>!</span>";
    }
    window.setTimeout(() => { copyButton.innerHTML = original; }, 1800);
  });
}
