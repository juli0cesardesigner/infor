const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,         // tempo entre os slides (em ms)
    disableOnInteraction: true, // PAUSA ao tocar ou arrastar
  },
});
