const Event = require("../../../models/event");
const renderFight = require("./fight");

function renderExplore() {
    // roll to decide following event
    document.querySelector("body").style.backgroundImage =
        "url('https://i.imgur.com/sFGnGzF.jpg')";

    document.querySelector("#page").innerHTML = `
    <h2>Would you like to explore further or turn back?</h2>
    <h4>
    Caution: Exploring further has a probability of facing danger </h4>

    <button onClick="exploreEvent()">Continue </button>
    <button onClick="returnHome()">Turn Back </button>
    `;
}

function exploreEvent() {
    let randomNum = Math.floor(Math.random() * 5);
    Event.allEvents()
        .then((events) => {
            return events[randomNum];
        })
        .then((randEvent) => {
            if (randEvent.event === "fight monster") {
                renderFight();
            }
        });
}
exploreEvent();
