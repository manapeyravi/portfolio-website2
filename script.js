document.addEventListener("DOMContentLoaded", () => {
    const clickMeBtn = document.getElementById("clickMeBtn");
    const message = document.getElementById("message");

    let clickCount = 0;

    clickMeBtn.addEventListener("click", () => {
        clickCount++;
        message.textContent = `Thank you for visiting! You clicked the interactive button ${clickCount} time(s).`;
        message.style.color = "#3498db";
    });
});
