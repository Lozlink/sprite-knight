const state = {
    loggedInUserName: null,
    userId: null,
    characters: [],
    selectedCharacters: []
};  
  
fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
        if (user) {
            state.loggedInUserName = user.email;
            state.userId = user.id;

            renderCharacters();
        }
        
        // Display the correct nav bar depending on if the user has successfully logged in or not.
        renderNav();
    });

