const hamburger = document.getElementById("hamburger");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");

function toggleMobileNav() {
  const isActive = hamburger.classList.toggle("active");
  mobileNavOverlay.classList.toggle("active");
  mobileNavOverlay.setAttribute("aria-hidden", !isActive);
}

hamburger.addEventListener("click", toggleMobileNav);
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMobileNav();
  }
});

// Close menu when clicking outside the nav content
mobileNavOverlay.addEventListener("click", (e) => {
  if (e.target === mobileNavOverlay) {
    toggleMobileNav();
  }
});

// Close menu when clicking a link
mobileNavOverlay.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav();
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const cardSwiper = new Swiper(".card-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.2,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const images = [
  "img/gallery/amphi theater (1).jpg",
  "img/gallery/basket ball.jpg",
  "img/gallery/club house.jpg",
];
let current = 0;

function openModal(index) {
  current = index;
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = images[current];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function nextImg() {
  current = (current + 1) % images.length;
  document.getElementById("modal-img").src = images[current];
}

function prevImg() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("modal-img").src = images[current];
}
