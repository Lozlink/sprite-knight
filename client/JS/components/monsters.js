function renderMonster() {
    fetch("/api/monsters")
        .then((res) => res.json())
        .then((randMonster) => {
            console.log(randMonster);
            console.log(randMonster.image);
            document.querySelector(".monster").innerHTML = `
                        <img src=${randMonster.image}>
                        <h2>${randMonster.mon_name}</h2> 
                        <p>${randMonster.health}</p>
                    `;
        });
}
