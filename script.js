document
.getElementById("openToday")
.addEventListener("click", () => {

    window.location.href = "calendar.html";

});

const stars =
document.querySelector(".stars");

for(let i = 0; i < 50; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "%";

    star.style.top =
    Math.random() * 100 + "%";

    star.style.animationDelay =
    Math.random() * 3 + "s";

    stars.appendChild(star);
}