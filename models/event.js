const db = require("../db/db");

const Event = {
    allEvents: () => {
        const sql = `SELECT * FROM events;`;

        return db.query(sql).then((dbRes) => dbRes.rows);
    },
};

module.exports = Event;
