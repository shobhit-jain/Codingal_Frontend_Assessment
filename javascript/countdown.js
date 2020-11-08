/* ---------------------------- nav count down timer ---------------------------- */

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    const start = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        if (minutes < 0) {
            clearInterval(start);
            modal_open_btn_disabled();
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

    modal_btn_end_class.onclick = () => {
        clearInterval(start);
        modal_open_btn_disabled();
        closeModal();
    };

    const modal_open_btn_disabled = () => {
        open_modal_btn.disabled = true;
        open_modal_btn.classList.add("btn-disabled");
    };
}

window.onload = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector("#time");
    startTimer(tenMinutes, display);
};

/* -------------------------------------------------------------------------- */
