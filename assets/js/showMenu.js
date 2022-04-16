function onClickMenu() {
    let menu = document.getElementById('show-menu');
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
        menu.classList.add("hide")
    } else {
        menu.classList.remove("hide")
        menu.classList.add("show")
    }
}