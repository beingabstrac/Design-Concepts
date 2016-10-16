var concept1 = document.getElementById("concept1");
var concept2 = document.getElementById("concept2");
var concept3 = document.getElementById("concept3");
var concept4 = document.getElementById("concept4");
var concept5 = document.getElementById("concept5");
var concept6 = document.getElementById("concept6");
var concept7 = document.getElementById("concept7");
var concept8 = document.getElementById("concept8");
var concept9 = document.getElementById("concept9");
var concept10 = document.getElementById("concept10");
var concept11 = document.getElementById("concept11");
var concept12 = document.getElementById("concept12");
var concept13 = document.getElementById("concept13");
var concept14 = document.getElementById("concept14");
var concept15 = document.getElementById("concept15");
var concept16 = document.getElementById("concept16");
var concept17 = document.getElementById("concept17");
var concept18 = document.getElementById("concept18");

concept1.addEventListener("mouseenter", picLinkEnter);
concept1.addEventListener("mouseleave", picLinkLeave);
concept2.addEventListener("mouseenter", picLinkEnter);
concept2.addEventListener("mouseleave", picLinkLeave);
concept3.addEventListener("mouseenter", picLinkEnter);
concept3.addEventListener("mouseleave", picLinkLeave);
concept4.addEventListener("mouseenter", picLinkEnter);
concept4.addEventListener("mouseleave", picLinkLeave);
concept5.addEventListener("mouseenter", picLinkEnter);
concept5.addEventListener("mouseleave", picLinkLeave);
concept6.addEventListener("mouseenter", picLinkEnter);
concept6.addEventListener("mouseleave", picLinkLeave);
concept7.addEventListener("mouseenter", picLinkEnter);
concept7.addEventListener("mouseleave", picLinkLeave);
concept8.addEventListener("mouseenter", picLinkEnter);
concept8.addEventListener("mouseleave", picLinkLeave);
concept9.addEventListener("mouseenter", picLinkEnter);
concept9.addEventListener("mouseleave", picLinkLeave);
concept10.addEventListener("mouseenter", picLinkEnter);
concept10.addEventListener("mouseleave", picLinkLeave);
concept11.addEventListener("mouseenter", picLinkEnter);
concept11.addEventListener("mouseleave", picLinkLeave);
concept12.addEventListener("mouseenter", picLinkEnter);
concept12.addEventListener("mouseleave", picLinkLeave);
concept13.addEventListener("mouseenter", picLinkEnter);
concept13.addEventListener("mouseleave", picLinkLeave);
concept14.addEventListener("mouseenter", picLinkEnter);
concept14.addEventListener("mouseleave", picLinkLeave);
concept15.addEventListener("mouseenter", picLinkEnter);
concept15.addEventListener("mouseleave", picLinkLeave);
concept16.addEventListener("mouseenter", picLinkEnter);
concept16.addEventListener("mouseleave", picLinkLeave);
concept17.addEventListener("mouseenter", picLinkEnter);
concept17.addEventListener("mouseleave", picLinkLeave);
concept18.addEventListener("mouseenter", picLinkEnter);
concept18.addEventListener("mouseleave", picLinkLeave);

function picLinkEnter() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

function picLinkLeave() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "hide";
  } else {
    pic.className = "";
  }
}
