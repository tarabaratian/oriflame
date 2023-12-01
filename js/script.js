let menu = document.querySelector("div.menu");
let coverfirst = document.querySelector("div.cover");
let menu2 = document.querySelector("div.lines");
let submenu = document.querySelector("div.submenu");
let leftmenu2 = document.querySelector("div.submenu-sign-in");
menu.addEventListener("click", function () {
  coverfirst.classList.add("fadeinleft");
  coverfirst.style.display = "flex";
});
coverfirst.addEventListener("click", function () {
  coverfirst.style.display = "none";
});
submenu.addEventListener("click", function (event) {
  event.stopPropagation();
});
leftmenu2.addEventListener("click", function (event) {
  event.stopPropagation();
});
menu2.addEventListener("click", function () {
  coverfirst.classList.add("deactive");
});
let searchphone = document.querySelector("div.search");
let coversearch = document.querySelector("div.cover2");
let write2 = document.querySelector("div.write2");
searchphone.addEventListener("click", function () {
  coversearch.classList.toggle("deactive");
  coversearch.classList.add("fade-in-down");
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
let coversign = document.querySelector("div.cover-sign-in");
let peaple = document.querySelector("div.peaple");
peaple.addEventListener("click", function () {
  coversign.style.display = "flex";
  coversign.classList.add("fadeinleft");
});
let sign2 = document.querySelector("div.sign-inn");
console.log(sign2);
sign2.addEventListener("click", function () {
  coversign.style.display = "none";
});
let lines = document.querySelector("div.liness");
lines.addEventListener("click", function () {
  coversign.style.display = "flex";
  coverfirst.classList.remove("deactive");
});
let signfpage = document.querySelector("div.sign-in1");
signfpage.addEventListener("click", function () {
  coverfirst.classList.add("deactive");
  coversign.classList.remove("deactive");
});
let btn = document.querySelector("img#btn");
let btn2 = document.querySelector("img#btn2");
let btn3 = document.querySelector("img#btn3");
let btn4 = document.querySelector("img#btn4");
let btn5 = document.querySelector("img#btn5");
let btn6 = document.querySelector("img#btn6");
let btn7 = document.querySelector("img#btn7");
let btn8 = document.querySelector("img#btn8");
let btn9 = document.querySelector("img#btn9");
let btn10 = document.querySelector("img#btn10");
let btn11 = document.querySelector("img#btn11");
let subset = document.querySelector("div.subset");
let subset2 = document.querySelector("div.subset2");
let subset3 = document.querySelector("div.subset3");
let subset4 = document.querySelector("div.subset4");
let subset5 = document.querySelector("div.subset5");
let subset6 = document.querySelector("div.subset6");
let subset7 = document.querySelector("div.subset7");
let subset8 = document.querySelector("div.subset8");
let subset9 = document.querySelector("div.subset9");
let subset10 = document.querySelector("div.subset10");
let subset11 = document.querySelector("div.subset11");
let btndown1 = document.querySelector("img#btn-down1");
let btndown2 = document.querySelector("img#btn-down2");
let btndown3 = document.querySelector("img#btn-down3");
let help = document.querySelector("div.subset-help");
let info = document.querySelector("div.subset-info");
let discoverr = document.querySelector("div.subset-discoverr");
let temail = document.querySelector("p#text-email");
let iemail = document.getElementById("email-input").value;
let chat11 = document.querySelector("button#chat11");
let chat111 = document.querySelector("div.chat1");
let black = document.querySelector("img#bagblack1");
let coverbag = document.querySelector("div.cover-bag");
let menubag = document.querySelector("div.menu-bag");
console.log(menubag);
let shop = document.querySelector("img#shop");
shop.addEventListener("click", function () {
  coverbag.style.display = "flex";
});
coverbag.addEventListener("click", function () {
  coverbag.style.display = "none";
});
menubag.addEventListener("click", function (event) {
  event.stopPropagation();
});
black.addEventListener("click", function () {
  coverbag.style.display = "flex";
});
coverbag.addEventListener("click", function () {
  coverbag.style.display = "none";
});
chat11.addEventListener("mouseover", function () {
  chat111.classList.add("active");
});
chat11.addEventListener("mouseout", function () {
  chat111.classList.remove("active");
  chat111.classList.add("fade-in-right");
});
var rotation = 0;
let counter = 0;
btn.addEventListener("click", function () {
  subset.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn.classList.add("rotatein");
  counter++;
  if (counter > 1) {
    btn.classList.add("rotateout");
  }
});
let counter2 = 0;
btn2.addEventListener("click", function () {
  subset2.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn2.classList.add("rotatein");
  counter2++;
  if (counter2 > 1) {
    btn2.classList.add("rotateout");
  }
});
let counter3 = 0;
btn3.addEventListener("click", function () {
  subset3.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn3.classList.add("rotatein");
  counter3++;
  if (counter3 > 1) {
    btn3.classList.add("rotateout");
  }
});
let counter4 = 0;
btn4.addEventListener("click", function () {
  subset4.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn4.classList.add("rotatein");
  counter4++;
  if (counter4 > 1) {
    btn4.classList.add("rotateout");
  }
});
let counter5 = 0;
btn5.addEventListener("click", function () {
  subset5.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn5.classList.add("rotatein");
  counter5++;
  if (counter5 > 1) {
    btn5.classList.add("rotateout");
  }
});
let counter6 = 0;
btn6.addEventListener("click", function () {
  subset6.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn6.classList.add("rotatein");
  counter6++;
  if (counter6 > 1) {
    btn6.classList.add("rotateout");
  }
});
let counter7 = 0;
btn7.addEventListener("click", function () {
  subset7.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn7.classList.add("rotatein");
  counter7++;
  if (counter7 > 1) {
    btn7.classList.add("rotateout");
  }
});
let counter8 = 0;
btn8.addEventListener("click", function () {
  subset8.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn8.classList.add("rotatein");
  counter8++;
  if (counter8 > 1) {
    btn8.classList.add("rotateout");
  }
});
let counter9 = 0;
btn9.addEventListener("click", function () {
  subset9.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn9.classList.add("rotatein");
  counter9++;
  if (counter9 > 1) {
    btn9.classList.add("rotateout");
  }
});
let counter10 = 0;
btn10.addEventListener("click", function () {
  subset10.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn10.classList.add("rotatein");
  counter10++;
  if (counter10 > 1) {
    btn10.classList.add("rotateout");
  }
});
let counter11 = 0;
btn11.addEventListener("click", function () {
  subset11.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btn11.classList.add("rotatein");
  counter11++;
  if (counter11 > 1) {
    btn11.classList.add("rotateout");
  }
});

btndown1.addEventListener("click", function () {
  help.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btndown1.classList.add("rotatein");
  counter2++;
  if (counter2 > 1) {
    btndown1.classList.add("rotateout");
  }
});
btndown2.addEventListener("click", function () {
  info.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btndown2.classList.add("rotatein");
  counter2++;
  if (counter2 > 1) {
    btndown2.classList.add("rotateout");
  }
});
btndown3.addEventListener("click", function () {
  discoverr.classList.toggle("active");
  rotation += 180;
  this.style.transform = "rotate(" + rotation + "deg)";
  btndown3.classList.add("rotatein");
  counter2++;
  if (counter2 > 1) {
    btndown3.classList.add("rotateout");
  }
});
let searchdesktop = document.querySelector("div.search-desktop");
let inputsearch = document.getElementById("input-search");
let imgclose = document.getElementById("close-search-desktop");
let peaple2 = document.getElementById("peaple2");
console.log(peaple2);
let signtitle = document.querySelector("div.sign-in-title");
let join1 = document.getElementById("joinus");
let join2 = document.getElementById("join");
inputsearch.addEventListener("click", function () {
  imgclose.classList.remove("deactive");
  searchdesktop.classList.add("shadow");
  inputsearch.value = "";
});
imgclose.addEventListener("click", function () {
  this.classList.add("deactive");
  searchdesktop.classList.remove("shadow");
  inputsearch.value = "";
});
peaple2.addEventListener("click", function () {
  coversign.style.display = "flex";
  coversign.classList.add("fadeinleft");
});
coversign.addEventListener("click", function () {
  this.style.display = "none";
});
join1.addEventListener("click", function () {
  join2.style.display = "flex";
  join2.classList.toggle("fade-in-down");
});
join2.addEventListener("click", function () {
  join2.style.display = "none";
});
let ecatalogue1 = document.querySelector("div.ecatalogue1");
let rightmenu1 = document.querySelector("div.rightmenu1");
let inspiration1 = document.querySelector("div.inspiration1");
let rightmenu2 = document.querySelector("div.rightmenu2");
let Nutrition1 = document.querySelector("div.Nutrition1");
let rightmenu3 = document.querySelector("div.rightmenu3");
let skin = document.querySelector("div.Skin-care1");
let rightmenu4 = document.querySelector("div.rightmenu44");
let make = document.querySelector("div.Make-up1");
let rightmenu5 = document.querySelector("div.rightmenu5");
let fragrance1 = document.querySelector("div.fragrance1");
let rightmenu6 = document.querySelector("div.rightmenu6");
let body = document.querySelector("div.bath-body1");
let rightmenu7 = document.querySelector("div.rightmenu777");
let hair = document.querySelector("div.hair1");
let rightmenu8 = document.querySelector("div.rightmenu8");
let accessories1 = document.querySelector("div.accessories1");
let rightmenu9 = document.querySelector("div.rightmenu99");
let men22 = document.querySelector("div.men22");
let rightmenu10 = document.querySelector("div.rightmenu10");
let kids = document.querySelector("div.kids-baby1");
let rightmenu111 = document.querySelector("div.rightmenu11");
ecatalogue1.addEventListener("mouseover", function () {
  rightmenu1.classList.add("active");
});
ecatalogue1.addEventListener("mouseout", function () {
  rightmenu1.classList.remove("active");
});
inspiration1.addEventListener("mouseover", function () {
  rightmenu2.classList.add("active");
});
inspiration1.addEventListener("mouseout", function () {
  rightmenu2.classList.remove("active");
});
Nutrition1.addEventListener("mouseover", function () {
  rightmenu3.classList.add("active");
});
Nutrition1.addEventListener("mouseout", function () {
  rightmenu3.classList.remove("active");
});
skin.addEventListener("mouseover", function () {
  rightmenu4.classList.add("active");
});
skin.addEventListener("mouseout", function () {
  rightmenu4.classList.remove("active");
});
make.addEventListener("mouseover", function () {
  rightmenu5.classList.add("active");
});
make.addEventListener("mouseout", function () {
  rightmenu5.classList.remove("active");
});
fragrance1.addEventListener("mouseover", function () {
  rightmenu6.classList.add("active");
});
fragrance1.addEventListener("mouseout", function () {
  rightmenu6.classList.remove("active");
});
body.addEventListener("mouseover", function () {
  rightmenu7.classList.add("active");
});
body.addEventListener("mouseout", function () {
  rightmenu7.classList.remove("active");
});
hair.addEventListener("mouseover", function () {
  rightmenu8.classList.add("active");
});
hair.addEventListener("mouseout", function () {
  rightmenu8.classList.remove("active");
});
accessories1.addEventListener("mouseover", function () {
  rightmenu9.classList.add("active");
});
accessories1.addEventListener("mouseout", function () {
  rightmenu9.classList.remove("active");
});
men22.addEventListener("mouseover", function () {
  rightmenu10.classList.add("active");
});
men22.addEventListener("mouseout", function () {
  rightmenu10.classList.remove("active");
});
kids.addEventListener("mouseover", function () {
  rightmenu111.classList.add("active");
});
kids.addEventListener("mouseout", function () {
  rightmenu111.classList.remove("active");
});
let desktop = document.querySelector("div.cover-desktop");
let menuu = document.querySelector("div.menu2");
menuu.addEventListener("click", function () {
  desktop.classList.toggle("active");
});
