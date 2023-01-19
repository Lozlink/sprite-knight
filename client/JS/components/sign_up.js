// Show the sign-up screen
function renderSignUp() {
    document.querySelector('#page').innerHTML = `
        <section class='sign-up'>
        <form onSubmit="signUp(event)">
            <h2>Sign Up</h2>
            <label for="">Name: </label>
            <input type="text" name="name">
            <label for="">Email: </label>
            <input type="text" name="email">
            <label for="">Password: </label>
            <input type="password" name="password">
            <button>Sign Up</button>
        </form>
        </section>
    `;
}

// Invoked when the user submits the sign-up form above
function signUp(event) {
    event.preventDefault();
    
    // This is our form DOM object
    const form = event.target;
    
    // Create an object to store all our form input data so that we can send it with our request
    const data = Object.fromEntries(new FormData(form));
    
    // Send a post request to the server along with our form input data
    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        // Convert the response into JSON. This will be the username that was just signed up.
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                renderSignUp();
                renderError(res.error);
            } else {
                state.loggedInUserName = res.email;
                state.userId = res.id;

                // Update nav bar to only display the logout button (removing Sign Up and Login)
                renderNav();
                
                renderCharacterCreation();
            }
        });
}