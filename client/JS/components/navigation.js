// This function renders the correct nav bar buttons at the top of the page depending on if the user is logged in or not.
function renderNav() {
    if (state.loggedInUserName) {
        document.querySelector(".header-nav").innerHTML = `
            <ul>
                <li style="float:left"><img class="logo" onClick="renderCharacters()" src="./images/SK_Logo_LightFont.png" alt=""></li>
                <li class='logout' onClick="logout()">Log Out</li>
            </ul>
        `;
    } else {
        document.querySelector(".header-nav").innerHTML = `
            <ul>
                <li style="float:left"><img class="logo" src="./images/SK_Logo_LightFont.png" alt=""></li>
                <nav class="links">
                    <li class='sign-up' onClick="renderSignUp()">Sign Up</li>
                    <li class='login' onClick="renderLogin()">Log In</li>
                </nav>
            </ul>
        `;
    }
}
