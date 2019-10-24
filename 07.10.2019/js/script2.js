var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slide1, .slide2, .slide3");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0;i < slides.length;i++){
        slides[i].style.display = "none";
    }
    for (i = 0;i < dots.length;i++){
        dots[i].className = dots[i].className.replace("active2","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+=" active2";
}

/////////////////////////////////////////

function auto() {
    setTimeout("plusSlides(1)", 5000);
    var stop = setTimeout("auto()", 5000);

    /*
    var slides2 = document.getElementsByClassName("slide1");
    slides2.onmouseenter(function () {
        clearTimeout(stop);
    });
    */

}

auto();

////////////////////////////////////////////

document.onscroll = scrolling;

function scrolling() {
    var sc = jQuery(document).scrollTop();

    if (sc > 500 && jQuery(".btnupdiv").css("display") !="block"){
        jQuery(".btnupdiv").css({"display":"block"});
        block_in(0.1,jQuery(".btnupdiv"));
    }
    else if(sc < 500 && jQuery(".btnupdiv").css("display") !="none") {
        //jQuery(".scroll").css({"display":"none"});
        block_out(jQuery(".btnupdiv").css("opacity"),jQuery(".btnupdiv"));
    }
}

function block_in(opa,elem){
    elem.css({"opacity":opa});
    opa += 0.1;

    if(opa < 1){
        setTimeout(function (){block_in(opa,elem)},100);
    }
}

function block_out(opa,elem){
    elem.css({"opacity":opa});
    opa -= 0.1;

    if(opa > 0){
        setTimeout(function (){block_out(opa,elem)},100);
    }
    else {
        jQuery(".btnupdiv").css({"display":"none"});
    }
}

///////////////////////////////////////////

jQuery(".btnupdiv").click(function my(event) {
    var root = jQuery(":root");
    //var root = jQuery(document);

    var scro = root.scrollTop();
    scro -= 50;

    root.scrollTop(scro);

    if (scro > 0){
        setTimeout(my,1);
    }
});

////////////////////////////////////////////

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides4(n) {
    var i;
    var slides = document.querySelectorAll(".slide14, .slide24, .slide34");
    var dots = document.getElementsByClassName("dot4");
    if (n > slides.length){
        slideIndex4 = 1;
    }
    if (n < 1){
        slideIndex4 = slides.length;
    }
    for (i = 0;i < slides.length;i++){
        slides[i].style.display = "none";
    }
    for (i = 0;i < dots.length;i++){
        dots[i].className = dots[i].className.replace("active4","");
    }

    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className+=" active4";

    var leftdot = document.getElementById("dot1");
    var maindot = document.getElementById("dot2");
    var rightdot = document.getElementById("dot3");

    if (leftdot.classList.contains('active4')){
        leftdot.style.backgroundImage = "url(img/dot6.jpg)";
        maindot.style.backgroundImage = "url(img/dot4.jpg)";
        rightdot.style.backgroundImage = "url(img/dot5.jpg)";
    }
    else if (maindot.classList.contains('active4')) {
        leftdot.style.backgroundImage = "url(img/dot5.jpg)";
        maindot.style.backgroundImage = "url(img/dot6.jpg)";
        maindot.style.border = "1px solid #ffffff";
        rightdot.style.backgroundImage = "url(img/dot4.jpg)";
    }
    else if (rightdot.classList.contains('active4')) {
        leftdot.style.backgroundImage = "url(img/dot4.jpg)";
        maindot.style.backgroundImage = "url(img/dot5.jpg)";
        maindot.style.border = "1px solid #ffffff";
        rightdot.style.backgroundImage = "url(img/dot6.jpg)";
    }
}

////////////////////////////////////////////

