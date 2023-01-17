function rollDice() {
    return 1 + Math.floor(Math.random() * 6)
 }


function renderFight() {
    document.querySelector('#page').innerHTML = ` 
    <div class="fight-box">
        <div class="player-character">
            <img src='#' alt="">
        </div>
        <div class="dice">
            <img src="https://i.imgur.com/9j6T4H5.png" onClick=diceRoll() alt="">
        </div>
        <div class="monster">
            <img src='#' alt="">
        </div>

    </div>
    `;
}

function diceRoll() {
    console.log(rollDice())
    if (rollDice() > 3) {
        return renderPlayerWins()
    } else {
        return renderMonsterWins()
    }

}

function renderPlayerWins() {
    document.querySelector('#page').innerHTML = ` 
    <div class="fight-box">
        <div class="player-character">
            <img src='#' alt="">
        </div>
        <div class="continue">
        <h1>Player wins!</h1>
        <button>Continue</button>
        </div>

    </div>
    `;
}

function renderMonsterWins() {
    document.querySelector('#page').innerHTML = ` 
    <div class="fight-box">
        <div class="monster">
            <img src='#' alt="">
        </div>
        <div class="continue">
        <h1> Monster wins!</h1>
        <button>Continue</button>
        </div>

    </div>
    `;
}

// randomized person winning bug 
