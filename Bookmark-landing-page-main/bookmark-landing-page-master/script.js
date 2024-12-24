/* Navigation */
const menuBtn = document.querySelector(".nav-menu-btn");
menuBtn.addEventListener("click", () => {
  const menuNav = document.querySelector(".menu-nav");
  const nav = document.querySelector(".navigation");
  const body = document.body;

  body.style.overflow = "hidden";
  nav.style.visibility = "hidden";
  menuNav.style.display = "flex";
});

const closeMenuBtn = document.querySelector(".close-menu-btn");
closeMenuBtn.addEventListener("click", () => {
  const menuNav = document.querySelector(".menu-nav");
  const nav = document.querySelector(".navigation");
  const body = document.body;

  body.style.overflow = "auto";
  nav.style.visibility = "visible";
  menuNav.style.display = "none";
});

/* Features */
const featureBtns = document.querySelectorAll("[class*='feature-btn'");
featureBtns.forEach((featureBtn, index) => {
  featureBtn.addEventListener("click", () => {
    const featureImageSection = document.querySelector(
      ".feature-image-section"
    );
    const featureSubtitle = document.querySelector(".feature-subtitle");
    const featureDesc = document.querySelector(".feature-text-section .desc");

    featureBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    featureBtn.classList.add("selected");

    switch (index) {
      case 0: {
        featureImageSection.style.backgroundImage =
          "url(images/illustration-features-tab-1.svg)";
        featureSubtitle.textContent = "Bookmark in one click";
        featureDesc.textContent =
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
        break;
      }
      case 1: {
        featureImageSection.style.backgroundImage =
          "url(images/illustration-features-tab-2.svg)";
        featureSubtitle.textContent = "Intelligent search";
        featureDesc.textContent =
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks";
        break;
      }
      case 2: {
        featureImageSection.style.backgroundImage =
          "url(images/illustration-features-tab-3.svg)";
        featureSubtitle.textContent = "Share your bookmarks";
        featureDesc.textContent =
          "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        break;
      }
    }
  });
});

/* FAQs */
const faqBtns = document.querySelectorAll(".faq-btn");
faqBtns.forEach((faqBtn, index) => {
  faqBtn.addEventListener("click", () => {
    const answers = document.querySelectorAll(".answer");
    const arrowIcons = document.querySelectorAll(".arrow-icon");
    const arrowStrokes = document.querySelectorAll(".arrow-stroke");

    answers[index].classList.toggle("active");
    arrowIcons[index].classList.toggle("active");
    arrowStrokes[index].classList.toggle("active");
  });
});

/* CTA Footer */
const emailInput = document.querySelector(".email-input");
const ctaSubmitBtn = document.querySelector(".cta-submit-btn");
let cond = false;

emailInput.addEventListener("input", () => {
  const pattern =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const ctaBtn = document.querySelector(".cta-submit-btn");
  const errorIcon = document.querySelector(".error-icon");
  const errorMessage = document.querySelector(".error-message");

  if (emailInput.value === "") {
    cond = false;
    ctaBtn.classList.remove("active");
    emailInput.style.borderColor = "transparent";
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
  } else if (pattern.test(emailInput.value)) {
    cond = true;
    ctaBtn.classList.add("active");
    emailInput.style.borderColor = "transparent";
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
  } else {
    cond = false;
    ctaBtn.classList.remove("active");
    emailInput.style.borderColor = "var(--softRed)";
    errorIcon.style.display = "inline-block";
    errorMessage.style.display = "flex";
  }
});
