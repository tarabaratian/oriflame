let underproduct2 = document.getElementById("under-product2");
let coverunder = document.querySelector("div.cover-under-product");
underproduct2.addEventListener("click", function () {
  coverunder.classList.toggle("deactive");
});
let menudesktop = document.querySelector("div.menu2");
let coverdesktop = document.querySelector("div.cover-desktop");
menudesktop.addEventListener("click", function () {
  coverdesktop.classList.toggle("active");
});
let inputsearch = document.getElementById("input-search");
let closeinputdesktop = document.getElementById("close-search-desktop");
let searchdesktop = document.querySelector("div.search-desktop");
inputsearch.addEventListener("click", function () {
  closeinputdesktop.classList.remove("deactive");
  searchdesktop.classList.add("shadow");
});
closeinputdesktop.addEventListener("click", function () {
  this.classList.add("deactive");
  searchdesktop.classList.remove("shadow");
});
let joinus = document.getElementById("joinus");
let join2 = document.getElementById("join");
joinus.addEventListener("click", function () {
  join2.style.display = "flex";
  join2.classList.toggle("fade-in-down");
});
join2.addEventListener("click", function () {
  join2.style.display = "none";
});
let peaple2 = document.getElementById("peaple2");
let coversign = document.querySelector("div.cover-sign-in");
peaple2.addEventListener("click", function () {
  coversign.style.display = "flex";
  coversign.classList.add("fadeinleft");
});
coversign.addEventListener("click", function () {
  this.style.display = "none";
});
let menuipad = document.querySelector("div.menu");
let coverfirst = document.querySelector("div.cover");
let submenu = document.querySelector("div.submenu");
menuipad.addEventListener("click", function () {
  coverfirst.classList.add("fadeinleft");
  coverfirst.style.display = "flex";
});
coverfirst.addEventListener("click", function () {
  coverfirst.style.display = "none";
});
submenu.addEventListener("click", function (event) {
  event.stopPropagation();
});
let searchphone = document.querySelector("div.search");
let coversearch = document.querySelector("div.cover2");
let write2 = document.querySelector("div.write2");
searchphone.addEventListener("click", function () {
  coversearch.style.display = "flex";
  coversearch.classList.add("fade-in-down");
});
coversearch.addEventListener("click", function () {
  coversearch.style.display = "none";
});
write2.addEventListener("click", function (event) {
  event.stopPropagation();
});
let btnclose = document.querySelector("img#close");
btnclose.addEventListener("click", function () {
  document.getElementById("input").value = "";
});
btnclose.addEventListener("click", function (event) {
  event.stopPropagation();
});
let peaple = document.querySelector("div.peaple");
peaple.addEventListener("click", function () {
  coversign.style.display = "flex";
  coversign.classList.add("fadeinleft");
});
