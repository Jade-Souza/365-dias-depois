const params =
new URLSearchParams(window.location.search);

const day =
params.get("day");


const remainingDays =
30 - (Number(day) - 1);

document
.getElementById("remainingDays")
.innerHTML =
`Faltam ${remainingDays} dias ❤️`;

const startDate = new Date(2026, 5, 20);

const today = new Date();

const diffDays =
Math.floor(
    (today - startDate) /
    (1000 * 60 * 60 * 24)
);

const unlockedDays =
Math.min(diffDays + 1, 30);

if(Number(day) > unlockedDays){

    document.body.innerHTML = `
    <div class="letter">
        <h1>🌙</h1>

        <p>
        Ainda não chegou a hora desta carta.
        </p>

        <p>
        Volte amanhã, meu bem. 💙
        </p>
    </div>
    `;

    throw new Error("Carta bloqueada");
}

const letter =
messages[day];

document.getElementById("title")
.innerHTML = letter.title;

document.getElementById("content")
.innerHTML = letter.text;

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

document
.getElementById("openLetter")
.addEventListener("click",()=>{

    document
    .querySelector(".envelope-image")
    .style.display = "none";

    document
    .getElementById("openLetter")
    .style.display = "none";

    const content =
    document.getElementById("contentContainer");

    content.style.display = "block";

    content.animate(
    [
        {
            opacity:0,
            transform:"translateY(20px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],
    {
        duration:800,
        fill:"forwards"
    });
});