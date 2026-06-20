const startDate = new Date("2026-06-20");

const today = new Date();

const diffTime =
today - startDate;

const diffDays =
Math.floor(
    diffTime /
    (1000 * 60 * 60 * 24)
);

const unlockedDays =
Math.min(diffDays + 1, 30);

for(let i = 1; i <= 30; i++){

    const card = document.createElement("div");

    card.classList.add("envelope");

    if(i <= unlockedDays){

        card.classList.add("opened");

        card.innerHTML = `
            <div class="icon">📨</div>
            <div class="day">Dia ${i}</div>
        `;

        card.addEventListener("click",()=>{

            window.location.href =
            `day.html?day=${i}`;

        });

    }else{

        card.classList.add("locked");

        card.innerHTML = `
            <div class="icon">🔒</div>
            <div class="day">Dia ${i}</div>
        `;
    }

    calendar.appendChild(card);
}

const starsContainer =
document.querySelector(".stars");

for(let i = 0; i < 60; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "%";

    star.style.top =
    Math.random() * 100 + "%";

    star.style.animationDelay =
    Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}