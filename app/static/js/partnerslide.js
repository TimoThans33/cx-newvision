function plusSlide(n) {
    showSlide(partnerindex += n);
}

function currentSlide(n) {
    showSlide(partnerindex = n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("partner");
    var dots = document.getElementsByClassName("btn");
    if (n > x.length) {partnerindex = 1}
    if (n < 1) {partnerindex = x.length}
    for (i = 0; i< x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("w3-black", "");
    }
    x[partnerindex-1].style.display = "block";
    dots[partnerindex-1].className += "w3-black";
}