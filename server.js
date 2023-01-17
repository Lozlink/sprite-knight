// Bring in express
const express = require('express');

//--------| Middlewares |--------\\
const logger = require('./middlewares/logger');
const sessions = require('./middlewares/sessions');

//--------| Controllers |--------\\
const usersController = require('./controllers/users_controller');
const sessionsController = require('./controllers/sessions_controller');
const charactersController = require('./controllers/characters_controller');
const eventsController = require('./controllers/events_controller')


// Start up the APP
const app = express();

// Initialize the port
const port = 3000;

// Start the web server
app.listen(port, () => console.log(`listening on port ${port}`));

//--------| Express Workflow: Middleware Functions |--------\\
// Log request information inside the terminal
app.use(logger);
// Send back our SPA
app.use(express.static('client'));
// Parses json body assigning the data into req.body
app.use(express.json());
// Enable session so that we can store cookies
app.use(sessions);

//--------| Middleware for Controllers with Routes|--------\\
app.use('/api/users', usersController);
app.use('/api/sessions', sessionsController);
app.use('/api/characters', charactersController);
app.use('/api/events', eventsController);