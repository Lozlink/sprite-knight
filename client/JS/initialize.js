const state = {
    loggedInUserName: null,
    characters: []
};  
  
fetch('/api/sessions')
    .then(res => res.json())
    .then(userName => state.loggedInUserName = userName);