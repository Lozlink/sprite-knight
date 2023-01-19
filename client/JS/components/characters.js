function getCharacters() {
    return fetch(`/api/characters/${state.userId}`)
        .then((res) => res.json())
        .then((characters) => (state.characters = characters));
}

function renderCharacters() {
    fetch(`/api/characters/${state.userId}`)
        .then((res) => res.json())
        .then((characters) => {
            state.characters = characters;

            document.querySelector('#page').className = 'page';
            document.querySelector('#page').classList.add('character-selection');

            document.querySelector("#page").innerHTML = `
                <div class="char-select-header">
                    <h3>Select a character to begin</h3>
                    <button class="create-char-btn" onClick="renderCharacterCreation()">Create a new character</button>
                </div>
                <div class="characters-list">
                    ${renderCharacter()}
                </div>
            `;

            // Remove the sign-up and login buttons
            if (document.querySelector(".sign-up")) {
                document.querySelector(".sign-up").remove();
            }
            if (document.querySelector(".login")) {
                document.querySelector(".login").remove();
            }
        });
}

function renderCharacter() {
    return state.characters
        .map((character) => {
            return `
                <div class="character" data-id='${character.id}'>
                    <div class="character-image">
                        <img onClick="selectCharacter(event)" src="${character.image}" alt="">
                        <div class="char-details">
                            <p>Name: ${character.char_name}</p>
                            <p>Age: ${character.age}</p>
                            <p>Gender: ${character.gender}</p>
                            <p>Health: ${character.health}</p>
                            <p>Level: ${character.level}</p>
                        </div>
                    </div>
                    <button class="delete-char-btn" onClick="deleteCharacter(event)">Delete</button>                
                </div>
            `;        
        })
        .join(""); 
        
}

function selectCharacter(event) {
    const selectCharImage = event.target
    const CharDOM = selectCharImage.closest(".character");
    const characterId = CharDOM.dataset.id;
    state.selectedCharacter = state.characters.filter((character) => character.id == characterId)[0]
    renderExplore()
//     fetch(`/api/characters/${characterId}`)
//     .then(res => res.json())
//     .then(character => {
//         selectedCharacter = character
//     })
 }

function renderFightCharacter() {
            return `
            <div class="character" >
                <div class="character-image">
                    <img o src="${state.selectedCharacter.image}" alt="">
                    <p>Name: ${state.selectedCharacter.char_name}</p>
                    <p>Health: <p class="player-health">${state.selectedCharacter.health}</p> </p>
                    <p>Level: ${state.selectedCharacter.level}</p>
                </div>
            </div>
        `;
    }
        
        


function deleteCharacter(event) {
    const delCharButton = event.target;
    const CharDOM = delCharButton.closest(".character");

    const characterId = CharDOM.dataset.id;

    fetch(`/api/characters/${characterId}`, {
        method: "DELETE",
    }).then(() => {
        state.characters = state.characters.filter(
            (character) => character.id != characterId
        );
        renderCharacters();
    });
}
