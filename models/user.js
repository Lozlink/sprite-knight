const db = require('../db/db');

const User = {
    create: (name, email, password_digest) => {
    const sql = `
        INSERT INTO users(name, email, password)
        VALUES($1, $2, $3)
        RETURNING *
    `;

    return db
        .query(sql, [name, email, password_digest])
        .then(dbRes => dbRes.rows[0]);
    },

    findByEmail: email => {
        const sql = 'SELECT * FROM users WHERE email = $1';

        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0]);
    },

    findById: id => {
        const sql = 'SELECT * FROM users WHERE id = $1';

        return db
            .query(sql, [id])
            .then(dbRes => {
                if (dbRes.rows.length > 0) {
                    return dbRes.rows[0];
                } else {
                    return null;
            }
        });
    }
};

module.exports = User;