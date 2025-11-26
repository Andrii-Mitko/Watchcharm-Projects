(() => {
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const mobileMenu = document.querySelector(".menu-section");

  if (!mobileMenu) return;

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      mobileMenu.classList.add("is-open");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  }
})();
