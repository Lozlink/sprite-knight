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
            `;
        });
}

function renderCharacter() {
    return state.characters.map(character => {
        return `
            <div class="character">
                <div class="character-image">
                    <img onClick="renderFight()" src="${character.image}" alt="">
                    <p>Name: ${character.char_name}</p>
                    <p>Age: ${character.age}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Health: ${character.health}</p>
                    <p>Level: ${character.level}</p>
                </div>
            </div>
        `;
    }).join('');
}