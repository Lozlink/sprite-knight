// render the character creation section:
function renderCharacterCreation() {
    document.querySelector("#page").innerHTML = `
    <section id='character-creation'>
        ${createCharacter()}
    </section>
    `;
}

function createCharacter() {
    const html = `
            <div class = "character-creation-box"

            <form id = "create-character-form">
                <div>
                    <label>Name:</label>
                    <input type="text" id="name">
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" id="age">
                </div>
                <div>
                    <label>Gender:</label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button onclick="submitCharacter()">Create Character</button>
            </form>
                <div class = "character-image">
                    <img src="" alt="">
                </div>
            </div>
                
                `;
    document.getElementById("character-creation").innerHTML = html;
}

function submitCharacter() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let level = 1;
    let image = "";
    let userID = null; //access userID from cookie??
    let health = 100;

    // Need to add code to add data to db
}
