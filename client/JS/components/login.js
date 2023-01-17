// Show the log-in screen
function renderLogin() {
    document.querySelector('#page').innerHTML = `
        <section class='login'>
        <form onSubmit="login(event)">
            <h2>Log In:</h2>
            <fieldset>
            <label for="">Email: </label>
            <input type="text" name="email">
            </fieldset>
            <fieldset>
            <label for="">Password: </label>
            <input type="password" name="password">
            </fieldset>
            <button>Login</button>
        </form>
        </section>
    `;
}

// Invoked when the user submits the log-in form above
function login(event) {
    event.preventDefault();

    // This is our form DOM object
    const form = event.target;

    // Create an object to store all our form input data so that we can send it with our request
    const data = Object.fromEntries(new FormData(form));
    
    // Send a post request to the server along with our form input data
    fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        // Convert the response into JSON. If the response contains an error, show the login page again along with the error. Otherwise, update the state object with the logged-in username and show the character creation page.
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                renderLogin();
                renderError(res.error);
            } else {
                state.loggedInUserName = res.email;
                state.userId = res.id;

                getCharacters().then(() => {
                    // If the user has at least one character, show their characters.
                    if (state.characters.length > 0) {
                        renderCharacters();
    
                    // Otherwise, show the character creation page.
                    } else {
                        renderCharacterCreation();
                    }
                });
            }
        });
}

function renderError(errorMessage) {
    document.querySelector('#page').innerHTML = 
        `<h2 style='color: red;'>${errorMessage}</h2>` + document.querySelector('#page').innerHTML;
}