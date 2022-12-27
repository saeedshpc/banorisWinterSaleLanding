const catBtn = document.getElementById("catBtn");
const catSection = document.getElementById("cat-part-2");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", mobileMenuToggle);

catBtn.addEventListener("click", toggleCat);

function toggleCat() {
  catSection.classList.toggle("flex");
  catSection.classList.toggle("hidden");
  if (catBtn.innerText === "دسته‌ بندی‌ های بیشتر") {
    catBtn.innerText = "دسته‌ بندی‌ های کمتر";
  } else {
    catBtn.innerText = "دسته‌ بندی‌ های بیشتر";
    window.location.href = "#line";
  }
}

function mobileMenuToggle() {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
}

// mobile menu closing fix
const mobileMenuLinks = document.getElementsByClassName("mobileMenuLinks");
var mobileMenuLinksArrays = [...mobileMenuLinks];
mobileMenuLinksArrays.forEach((element) => {
  element.addEventListener("click", mobileMenuToggle);
});
