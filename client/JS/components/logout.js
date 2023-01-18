function logoutBtn() {
    if (state.loggedInUserName !=null) {
    return `
        <button onClick="logout()">Log Out</button>
    `;
    }
}

function logout() {
    state.loggedInUserName = null;
    state.userId = null;
    state.characters = [];

    // Update nav bar to remove Logout since the user is now logged out.
    renderNav();
    renderLogin();
}

