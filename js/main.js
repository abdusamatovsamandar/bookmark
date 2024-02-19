//? JavaScript-ga HTML-dan kerakli taglarni chaqirib oldik
let elHiddenHeader = document.querySelector(".hidden-header");
let elMenuBtn = document.querySelector(".menu-btn");
let elCloseBtn = document.querySelector(".close-btn");

//? Menu button-ga hidden-header translate classini o'chirib tashlash uchun kod yozdik
elMenuBtn.addEventListener("click", () => {
  elHiddenHeader.classList.remove("-translate-y-[150%]");
});

//? Close button-ga hidden-header translate classini qo'shish uchun kod yozdik
elCloseBtn.addEventListener("click", () => {
  elHiddenHeader.classList.add("-translate-y-[150%]");
});
