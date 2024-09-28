const swiper = new Swiper(".custom-ct-swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".custom-ct-swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom-ct-swiper-button.next",
    prevEl: ".custom-ct-swiper-button.prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
