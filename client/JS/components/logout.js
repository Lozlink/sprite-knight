function logoutBtn() {
    return `
        <button onClick="logout()">Log Out</button>
    `;
}

function logout() {
    state.loggedInUserName = null;
    renderLogin();
}