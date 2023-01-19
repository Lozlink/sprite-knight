function renderExplore() {
    // roll to decide following event
    document.querySelector('#page').classList = 'page';
    document.querySelector('#page').classList.add('fight-or-explore-page');

    document.querySelector("body").style.backgroundImage =
        "url('https://i.imgur.com/xjkv6oX.png')";

        
    function loadingMenu() {
        document.querySelector("body").style.backgroundImage = ""
        
        return document.querySelector("#page").innerHTML = `
            <h2>Do you want to fight or explore?</h2>
            <div class="choices">
                <button onClick="renderFight()"> Fight </button>
                <button onClick="exploreEvent()"> Explore </button>
            </div>
        `;    
    }
    ;
    
    setTimeout(() => {
        loadingMenu()
    }, 3000) 
    
}

function exploreEvent() {
    fetch("/api/events")
        .then((res) => res.json())
        .then((randEvent) => {
            if (randEvent.event != "fight monster") {
                document.querySelector('#page').classList.add('explore-page');

                document.querySelector("#page").innerHTML = `
                    <img class="img-explore" src=${randEvent.image}>

                    <div class="explore-content">
                        <div class="text-explore">
                            <h2>${randEvent.event}</h2> 
                            <p>${randEvent.quote}</p>
                        </div>
                        <div class="buttons-position">    
                            <button onClick="renderFight()"> Fight </button>
                            <button onClick="exploreEvent()"> Explore </button>
                        </div>
                    </div>
                `;
            } else {
                document.querySelector('#page').classList.add('explore-page');

                document.querySelector("#page").innerHTML = `
                    <img class="img-explore" src=${randEvent.image}>

                    <div class="explore-content">                    
                        <div class="text-explore">
                            <h2>${randEvent.event}</h2> 
                            <p>${randEvent.quote}</p>
                        </div>                    
                    </div>
                `;

                setTimeout(renderFight, 10000);
            }
        });
}
