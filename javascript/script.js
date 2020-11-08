const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");
const close_icon = document.querySelector(".close_icon");

hamburger.onclick = () => {
    mobile_nav.classList.add("make_mobile_nav_visible");
    hamburger.classList.add("icon_hidden");
    close_icon.classList.add("icon_visible");
};

close_icon.onclick = () => {
    mobile_nav.classList.remove("make_mobile_nav_visible");
    hamburger.classList.remove("icon_hidden");
    close_icon.classList.remove("icon_visible");
};
