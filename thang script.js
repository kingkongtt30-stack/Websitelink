const themeToggle = document.querySelector("#themeToggle");
const searchInput = document.querySelector("#searchInput");
const cards = [...document.querySelectorAll(".app-card")];
const filters = [...document.querySelectorAll(".filter-chip")];
const emptyState = document.querySelector("#emptyState");
let currentFilter = "all";

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#resourceCount").textContent = cards.length;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const lightMode = document.body.classList.contains("light");
  themeToggle.textContent = lightMode ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    lightMode ? "Bật giao diện tối" : "Bật giao diện sáng"
  );
});

function updateCards() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
  let visibleCount = 0;

  cards.forEach((card) => {
    const name = (card.dataset.name || "").toLocaleLowerCase("vi");
    const platform = card.dataset.platform || "";

    const matchesSearch = name.includes(keyword);
    const matchesFilter = currentFilter === "all" || platform === currentFilter;
    const visible = matchesSearch && matchesFilter;

    card.hidden = !visible;
    if (visible) visibleCount++;
  });

  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateCards);

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    updateCards();
  });
});

/* Hiệu ứng chữ đánh máy */
const typingElement = document.getElementById("typing-rainbow");

if (typingElement) {
  const text = "This game is easy for me..";
  let index = 0;
  let deleting = true;

  function type-Text() {
    if (!deleting) {
      index++;
      typingElement.textContent = text.slice(0, index);

      if (index >= text.length) {
        deleting = false;
        setTimeout(type-Text, 1500);
        return;
      }
    } else {
      index--;
      typingElement.textContent = text.slice(0, index);

      if (index <= 0) {
        deleting = false;
      }
    }

    setTimeout(typeText, deleting ? 35 : 65);
  }

  typeText();
}