const state = {
    loggedInUserName: null
};  
  
fetch('/api/sessions')
    .then(res => res.json())
    .then(userName => state.loggedInUserName = userName);