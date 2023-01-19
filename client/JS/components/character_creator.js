// render the character creation section:
function renderCharacterCreation() {
    document.querySelector('#page').classList = 'page';
    document.querySelector('#page').classList.add('character-creation');
    
    document.querySelector("#page").innerHTML = `
    <div class="character-creation-box">

    <form onSubmit="submitCharacter(event)" id="create-character-form">
        <div>
            <label>Name: </label>
            <input type="text" name="char_name">
        </div>
        <div>
            <label>Age:</label>
            <input type="number" name="age">
        </div>
        <div>
            <label>Gender:</label>
            <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <button>Create Character</button>
    </form>
        <div class = "character-image">
            <img src="https://i.imgur.com/fuMSF07.jpg" alt="">
        </div>
    </div>
        
        `;
}

// submits code to character db table
function submitCharacter(event) {
    event.preventDefault();
    const form = event.target;
    let data = Object.fromEntries(new FormData(form));

    data.level = 1;
    data.image = "https://i.imgur.com/fuMSF07.jpg";
    data.health = 100;
    data.userId = state.userId;

    // Need to add code to add data to db

    fetch("/api/characters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(character => {
            state.characters.push(character);
            renderCharacters()
        });
}
