function renderMonster() {
    fetch("/api/monsters")
        .then((res) => res.json())
        .then((randMonster) => {
            console.log(randMonster);
            console.log(randMonster.image);
            document.querySelector(".monster").innerHTML = `
                        <img src=${randMonster.image}>
                        <h2 class='monster-name'>${randMonster.mon_name}</h2> 
                        <p class="monster-health">${randMonster.health}</p>
                    `;
        });
}
