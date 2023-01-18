function logoutBtn() {
    if (state.loggedInUserName !=null) {
    return `
        <button onClick="logout()">Log Out</button>
    `;
    }
}

function logout() {
    state.loggedInUserName = null;
    renderLogin();
}

