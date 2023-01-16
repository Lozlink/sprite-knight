// Bring in express
const express = require('express')

//--------| Middlewares |--------\\
const logger = require('./middlewares/logger')

//--------| Controllers |--------\\

// Start up the APP
const app = express()

// Initialize the port
const port = 3000

// Start the web server
app.listen(port, () => console.log(`listening on port ${port}`))

//--------| Express Workflow: Middleware Functions |--------\\
// Log request information inside the terminal
app.use(logger)
// Send back our SPA
app.use(express.static('client'))
// Parses json body assigning the data into req.body
app.use(express.json())

//--------| Middleware for Controllers with Routes|--------\\
