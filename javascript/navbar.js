// Get the navbar
const mobile_nav = document.querySelector(".mobile_nav");

// Get the buttons that toggle navbar
const hamburger = document.querySelector(".hamburger");
const close_icon = document.querySelector(".close_icon");

// open nav
hamburger.onclick = () => {
    mobile_nav.classList.add("make_mobile_nav_visible");

    hamburger.classList.toggle("icon_transition_hidden");

    close_icon.classList.add("icon_transition_visible");
    close_icon.classList.remove("icon_transition_hidden");

    setTimeout(() => {
        hamburger.classList.add("icon_hidden");
        close_icon.classList.add("icon_visible");
    }, 350);
};

// close nav
close_icon.onclick = () => {
    mobile_nav.classList.remove("make_mobile_nav_visible");

    close_icon.classList.remove("icon_transition_visible");
    close_icon.classList.add("icon_transition_hidden");

    hamburger.classList.toggle("icon_transition_hidden");

    setTimeout(() => {
        hamburger.classList.remove("icon_hidden");
        close_icon.classList.remove("icon_visible");
    }, 350);
};
