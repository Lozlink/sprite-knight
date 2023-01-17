function logout() {
    state.loggedInUserName = null;
    renderLogin();
}