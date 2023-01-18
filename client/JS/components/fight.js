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
            <p class="fight-message">Test<p>
        </div>
        <div class="monster">
            ${renderMonster()}
        </div>

    </div>
    `;
};

// function diceRoll() {
//     console.log(rollDice());
//     if (rollDice() > 3) {
//         console.log(state.characters);
//         console.log(state.id);
//         fetch(`/api/characters/${state.characters[0].id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             // body: JSON.stringify()
//         }).then(() => {
//             state.characters[0].level += 1;
//             renderPlayerWins();
//         });
//     } else {
//         return renderMonsterWins();
//     }
// }

function diceRoll() {
    let playerAttack = rollDice() * 10;
    let monsterAttack = 70 - playerAttack;
    let playerHealth = document.querySelector(".player-health").innerHTML;
    let monsterHealth = document.querySelector(".monster-health").innerHTML;
    let fightMessage = document.querySelector(".fight-message").innerHTML;
    const monsterName = document.querySelector(".monster-name").innerHTML;
    // checks if player attack kills monster - if true - player renderPlayerWins and level up
    if (monsterHealth - playerAttack > 0 && playerHealth - monsterAttack > 0) {
        document.querySelector(
            ".fight-message"
        ).innerHTML = `You dealt ${playerAttack} damage to the ${monsterName}! The ${monsterName} swung back and did ${monsterAttack} damage to you.<br> Roll again to keep fighting`;
        document.querySelector(".monster-health").innerHTML =
            monsterHealth - playerAttack;
        document.querySelector(".player-health").innerHTML =
            playerHealth - monsterAttack;
    } else if (monsterHealth - playerAttack <= 0) {
        document.querySelector(
            ".fight-message"
        ).innerHTML = `You dealt ${playerAttack} damage to the ${monsterName}! You've defeated the monster`
        fetch(`/api/characters/${state.characters[0].id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify()
        }).then(() => {
            state.characters[0].level += 1;
            setTimeout(() => {
                renderPlayerWins()
            }, 2000);
        });
    } else if (playerHealth - monsterAttack <= 0) {
        document.querySelector(
            ".fight-message"
        ).innerHTML = `The ${monsterName} dealt a fatal blow with ${monsterAttack} damage.`
        setTimeout(() => {
            renderMonsterWins()
        }, 2000);
    }
}

function renderHealth() {}

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

// randomized person winning bug
