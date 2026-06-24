const startDate = new Date(2026, 5, 20); // 20/06/2026

const now = new Date();

const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
);

const diffDays = Math.floor(
    (today - startDate) /
    (1000 * 60 * 60 * 24)
);

const unlockedDays =
Math.min(
    Math.max(diffDays + 1, 0),
    30
);

const calendar =
document.getElementById("calendar");

for(let i = 1; i <= 30; i++){

    const card = document.createElement("div");

    card.classList.add("envelope");

    if(i <= unlockedDays){

        card.classList.add("opened");

        card.innerHTML = `
                <div class="day">${i}</div>
        `;

        card.addEventListener("click",()=>{

            window.location.href =
            `day.html?day=${i}`;

        });

    }else{

        card.classList.add("locked");

        card.innerHTML = `
            <div class="day">${i}</div>
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