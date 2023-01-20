function renderMonster() {
    fetch("/api/monsters")
        .then((res) => res.json())
        .then((randMonster) => {
            state.battleMonster = randMonster;

            document.querySelector(".monster").innerHTML = `
                        <img src=${state.battleMonster.image}>
                        <h2 class='monster-name'>${state.battleMonster.mon_name}</h2> 
                        <p>Health:   <span class="monster-health">${state.battleMonster.health}</span><p/>
                    `;
        });
}
