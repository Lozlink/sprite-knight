const pg = require('pg');

const db = new pg.Pool({
    database: 'sprite_knight_dev'
});

module.exports = db;