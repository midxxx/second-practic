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
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i2;
    var slides2 = document.querySelectorAll(".slide1, .slide2, .slide3");
    var dots2 = document.getElementsByClassName("dot");
    var element2 = document.getElementsByClassName("opacity");
    //var time = window.setInterval(function (){
        //plusSlides(1);},3000);
    
    var time2 = getNewTimer();

    function getNewTimer() {
        return window.setInterval(function (){
            plusSlides(1);},2000);
    }

    for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }

    slideIndex2++;
    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }

    for (i = 0;i < dots2.length;i++){
        dots2[i].className = dots2[i].className.replace("active2","");
    }

    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className+=" active2";


    element2[0].onmouseover = function() {
        clearTimeout(time2);
    };

    element2[0].onmouseout = function() {
        time2 = getNewTimer();
    };

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

document.getElementById("slider2right").onclick = slider2right;
var left = 5;

function slider2right() {
    var polosa1 = document.getElementById("lineslides");
    var active23 = document.getElementsByClassName("active22");
    var target22left = active23[0].nextElementSibling;

    left = left - 350;
    if (left < -400){
        left = 10;
        target22left = active23[0].previousElementSibling;
    }
    polosa1.style.left = left + "px";

    if (target22left.classList.contains('active22')){
        target22left.classList.remove('active22')
    }
    else {
        var openlink22 = document.querySelector('.active22');
        if (openlink22) {
            openlink22.classList.remove('active22')
        }
        target22left.classList.add('active22');
    }
}



document.getElementById("slider2left").onclick = slider2left;

function slider2left() {
    var polosa1 = document.getElementById("lineslides");
    var active23 = document.getElementsByClassName("active22");
    var target22right = active23[0].previousElementSibling;

    left = left + 350;
    if (left > 400){
        left = 10;
        target22right = active23[0].nextElementSibling;
    }
    polosa1.style.left = left + "px";

    if (target22right.classList.contains('active22')){
        target22right.classList.remove('active22')
    }
    else {
        var openlink22 = document.querySelector('.active22');
        if (openlink22) {
            openlink22.classList.remove('active22')
        }
        target22right.classList.add('active22');
    }
}

////////////////////////////////////////////

var ourlink3 = document.querySelectorAll('.ourlinks > a');

for (var i = 0; i < ourlink3.length; i++){
    ourlink3[i].addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;
            var openlink = document.querySelector('.active33');
            if (openlink){
                openlink.classList.remove('active33')
            }
            target.classList.add('active33');
    });

}

////////////////////////////////////////////

var ourlink4 = document.querySelectorAll('.ourlinks > a');
var ourline = document.getElementsByClassName('ourline');
var left2 = 0;

ourlink4[0].addEventListener('click' , function () {
    left2 = 0;
    ourline[0].style.left = left2 + "px";
});

ourlink4[1].addEventListener('click' , function () {
    left2 = -1112;
    ourline[0].style.left = left2 + "px";
});

ourlink4[2].addEventListener('click' , function () {
    left2 = -2224;
    ourline[0].style.left = left2 + "px";
});

ourlink4[3].addEventListener('click' , function () {
    left2 = -3336;
    ourline[0].style.left = left2 + "px";
});

ourlink4[4].addEventListener('click' , function () {
    left2 = -4448;
    ourline[0].style.left = left2 + "px";
})};

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
        leftdot.style.backgroundImage = "url(img/dot5.jpg)";
        maindot.style.backgroundImage = "url(img/dot4.jpg)";
        rightdot.style.backgroundImage = "url(img/dot6.jpg)";
    }
    else if (maindot.classList.contains('active4')) {
        leftdot.style.backgroundImage = "url(img/dot6.jpg)";
        maindot.style.backgroundImage = "url(img/dot5.jpg)";
        maindot.style.border = "1px solid #ffffff";
        rightdot.style.backgroundImage = "url(img/dot4.jpg)";
    }
    else if (rightdot.classList.contains('active4')) {
        leftdot.style.backgroundImage = "url(img/dot4.jpg)";
        maindot.style.backgroundImage = "url(img/dot6.jpg)";
        maindot.style.border = "1px solid #ffffff";
        rightdot.style.backgroundImage = "url(img/dot5.jpg)";
    }
}

//////////////////////////////

