function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
}

const renderFight = () => {
    document.querySelector("#page").innerHTML = ` 
    <div class="fight-box">
        <div class="player-character">
            ${renderFightCharacter()}
        </div>
        <div class="dice">
            <img src="https://i.imgur.com/9j6T4H5.png" onClick=diceRoll() alt="">
            <p class="fight-message"><p>
        </div>
        <div class="monster">
            ${renderMonster()}
        </div>

    </div>
    `;
};

function diceRoll() {
    let playerAttack = rollDice() * 10;
    let monsterAttack = 70 - playerAttack;
    let playerHealth = document.querySelector(".player-health");
    let monsterHealth = document.querySelector(".monster-health");
    let fightMessage = document.querySelector(".fight-message");
    const monsterName = document.querySelector(".monster-name");
    // checks if player attack kills monster - if true - player renderPlayerWins and level up
    if (
        monsterHealth.innerHTML - playerAttack > 0 &&
        playerHealth.innerHTML - monsterAttack > 0
    ) {
        fightMessage.innerHTML = `You dealt ${playerAttack} damage to the ${monsterName.innerHTML}! The ${monsterName.innerHTML} swung back and did ${monsterAttack} damage to you.<br> Roll again to keep fighting`;
        monsterHealth.innerHTML = monsterHealth.innerHTML - playerAttack;
        playerHealth.innerHTML = playerHealth.innerHTML - monsterAttack;
    } else if (monsterHealth.innerHTML - playerAttack <= 0) {
        fightMessage.innerHTML = `You dealt ${playerAttack} damage to the ${monsterName.innerHTML}! You've defeated the monster`;
        fetch(`/api/characters/${state.characters[0].id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            state.characters[0].level += 1;
            setTimeout(() => {
                renderPlayerWins();
            }, 2000);
        });
    } else if (playerHealth - monsterAttack <= 0) {
        fightMessage.innerHTML = `The ${monsterName.innerHTML} dealt a fatal blow with ${monsterAttack} damage.`;
        setTimeout(() => {
            renderMonsterWins();
        }, 2000);
    }
}

function renderPlayerWins() {
    document.querySelector("#page").innerHTML = ` 
    <div class="fight-box">
        <div class="player-character">
        ${renderFightCharacter()}
        </div>
        <div class="continue">
        <h1>Player wins!</h1>
        <h2> You have levelled up! </h2>
        <button onClick="renderFight()"> Fight Again </button>
        <button onClick="exploreEvent()"> Explore </button>
        </div>

    </div>
    `;
}

function renderMonsterWins() {
    document.querySelector("#page").innerHTML = ` 
    <div class="fight-box">
        <div class="monster">
        ${renderMonster()}
        </div>
        <div class="continue">
        <h1> Monster wins!</h1>
        <button onClick="renderFight()"> Fight Again</button>
        <button onClick="exploreEvent()"> Explore </button>
        </div>

    </div>
    `;
}

// module.exports = renderFight;
