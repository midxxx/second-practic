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

////////////////////////////////////////

