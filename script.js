document.addEventListener("DOMContentLoaded", () => {
    const clickMeBtn = document.getElementById("clickMeBtn");
    const message = document.getElementById("message");

    clickMeBtn.addEventListener("click", () => {
        message.textContent = "Thank you for visiting my portfolio website!";
    });
});
