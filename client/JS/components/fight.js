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
        </div>
        <div class="monster">
            ${renderMonster()}
        </div>

    </div>
    `;
};

function diceRoll() {
    console.log(rollDice());
    if (rollDice() > 3) {
        console.log(state.characters)
        console.log(state.id)
         fetch(`/api/characters/${state.characters[0].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify()
        })
        .then(()=> {
            state.characters[0].level += 1
            renderPlayerWins();
        })
        
    } else {
        return renderMonsterWins();
    }
}


function renderPlayerWins() {
    document.querySelector("#page").innerHTML = ` 
    <div class="fight-box">
        <div class="player-character">
            <img src='#' alt="">
        </div>
        <div class="continue">
        <h1>Player wins!</h1>
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
            <img src='#' alt="">
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
