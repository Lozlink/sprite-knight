function getCharacters() {
    return fetch(`/api/characters/${state.userId}`)
            .then(res => res.json())
            .then(characters => state.characters = characters);
}

function renderCharacters() {
    fetch(`/api/characters/${state.userId}`)
        .then(res => res.json())
        .then(characters => {
            state.characters = characters;

            document.querySelector('#page').innerHTML = `
                <h2>Available Characters</h2>
                <h3>Click a character to begin</h3>
                <div class="characters-list">
                    ${renderCharacter()}
                </div>
                <button onClick="renderCharacterCreation()">Create a new Character? </button>
            `;

            // Remove the sign-up and login buttons
            if (document.querySelector('.sign-up')) {
                document.querySelector('.sign-up').remove();
            }
            if (document.querySelector('.login')) {
                document.querySelector('.login').remove();
            }
        });
}

function renderCharacter() {
    return state.characters.map(character => {
        return `
            <div class="character" data-id='${character.id}'>
                <div class="character-image">
                    <img onClick="renderFight()" src="${character.image}" alt="">
                    <p>Name: ${character.char_name}</p>
                    <p>Age: ${character.age}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Health: ${character.health}</p>
                    <p>Level: ${character.level}</p>
                </div>
                <button onClick="deleteCharacter(event)">Delete Character?</button>
                
            </div>
        `;
    }).join('');
}

function deleteCharacter(event) {
    const delCharButton = event.target
    const CharDOM = delCharButton.closest('.character')

    const characterId = CharDOM.dataset.id

    fetch(`/api/characters/${characterId}`, {
        method: 'DELETE'
    })
    .then(() => {
        state.characters = state.characters.filter(character => character.id != characterId)
        renderCharacters()
    })
}