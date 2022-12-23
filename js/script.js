const catBtn = document.getElementById("catBtn");
const catSection = document.getElementById("cat-part-2");

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
