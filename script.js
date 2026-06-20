const anniversary = new Date("2026-07-20T00:00:00");

const countdown = document.getElementById("countdown");

function updateCountdown(){

    const now = new Date();

    const diff = anniversary - now;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    countdown.innerHTML =
        `${days} dias`;
}

const button = document.getElementById("openToday");

button.addEventListener("click", () => {
    window.location.href = "calendar.html";
});

updateCountdown();

setInterval(updateCountdown,1000);