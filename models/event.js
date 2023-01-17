const db = require("../db/db");

const Event = {
    randEvent: () => {
        const sql = `SELECT * FROM events ORDER BY RANDOM() LIMIT 1;`;

        return db.query(sql).then((dbRes) => dbRes.rows[0]);
    }
};

module.exports = Event;
