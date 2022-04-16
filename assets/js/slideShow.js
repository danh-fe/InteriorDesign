var index = 0;
hienThiSlide(index);

function hienThiSlideKeTiep() {
    index++;
    hienThiSlide(index);
}

function hienThiSlideTruocDo() {
    index--;
    hienThiSlide(index);
}

function hienThiSlide() {
    var slide = document.getElementsByClassName("slide");
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    if (index > slide.length - 1)
        index = 0;
    if (index < 0)
        index = slide.length - 1;
    slide[index].style.display = "block";
}
// setInterval(function() {
//     index++;
//     hienThiSlide();
// }, 2000);