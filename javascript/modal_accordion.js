/* ----------------------------- modal radio accordion ---------------------------- */

var class_completed = document.querySelector(".class_completed");
var class_interrupted = document.querySelector(".class_interrupted_accordion");
var other_reason = document.querySelector(".other_reason");
var class_interrupted_panel = document.querySelector(
    ".class_interrupted_panel"
);
var other_reason_panel = document.querySelector(".other_reason_panel");

class_completed.onclick = () => {
    class_interrupted_panel.classList.remove("show_class_interrupted_panel");
    class_interrupted_panel.classList.remove("panel_height_auto");
};

class_interrupted.onclick = () => {
    class_interrupted_panel.classList.add("show_class_interrupted_panel");
};

other_reason.onclick = () => {
    class_interrupted_panel.classList.add("panel_height_auto");
    other_reason_panel.classList.add("show_textarea_panel");
};

const child_radio = document.querySelectorAll(".child_radio");

for (const button of child_radio) {
    button.onclick = () => {
        other_reason_panel.classList.remove("show_textarea_panel");
        class_interrupted_panel.classList.remove("panel_height_auto");
    };
}

/* -------------------------------------------------------------------------- */
