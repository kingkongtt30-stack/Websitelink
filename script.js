/* JavaScript riêng cho website Minh Quang iOS
   Đã sửa: dùng đúng ID trong index.html và không truy cập các phần tử không tồn tại. */

(function () {
  "use strict";

  const THEME_KEY = "mquang-theme";
  const themeButton = document.getElementById("vthangios-theme-toggle");
  const themeIcon = document.getElementById("vthangios-theme-icon");

  function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("mquang-light-theme", isLight);
    document.documentElement.dataset.theme = isLight ? "light" : "dark";

    if (themeIcon) {
      themeIcon.classList.toggle("bi-sun-fill", !isLight);
      themeIcon.classList.toggle("bi-moon-fill", isLight);
    }

    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        isLight ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng"
      );
      themeButton.setAttribute(
        "title",
        isLight ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng"
      );
    }
  }

  // Hàm toàn cục để tương thích với onclick="vtToggleTheme()" trong HTML.
  window.vtToggleTheme = function () {
    const currentlyLight = document.body.classList.contains("mquang-light-theme");
    const nextTheme = currentlyLight ? "dark" : "light";

    applyTheme(nextTheme);

    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
      // Website vẫn đổi giao diện được nếu trình duyệt chặn localStorage.
    }
  };

  function initTheme() {
    let savedTheme = null;

    try {
      savedTheme = localStorage.getItem(THEME_KEY);
    } catch (error) {
      // Bỏ qua nếu localStorage không khả dụng.
    }

    // Mặc định là sáng; nếu người dùng đã chọn thì khôi phục lựa chọn đó.
    applyTheme(savedTheme === "dark" ? "dark" : "light");

    if (themeButton) {
      // Không thêm listener click ở đây vì HTML đã gọi vtToggleTheme() bằng onclick.
      themeButton.type = "button";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }
})();
