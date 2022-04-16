window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    let moveTop = document.getElementById('movetop');
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        moveTop.style.display = 'block';
    } else {
        moveTop.style.display = 'none';
    }
}

function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}