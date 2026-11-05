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

  // Catalog: Show more / Show less
  const catalogList = document.querySelector(".catalog-div-card");
  const showMoreBtn = document.querySelector(".btn-more");

  if (catalogList && showMoreBtn) {
    showMoreBtn.setAttribute("aria-expanded", "false");

    showMoreBtn.addEventListener("click", () => {
      const isExpanded = catalogList.classList.toggle("is-expanded");

      showMoreBtn.setAttribute("aria-expanded", String(isExpanded));
      showMoreBtn.textContent = isExpanded ? "Show less" : "Show more";
    });
  }

  // Contact form: prevent accidental GET submission
  const contactForm = document.querySelector(".contact-form");
  const formStatus = document.querySelector(".form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      formStatus.textContent =
        "The contact form is not connected yet. Please contact us by phone.";
    });
  }
})();
