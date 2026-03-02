const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:root@db:5432/app_db',
});

module.exports = {
    connect: async () => {
        const client = await pool.connect();
        client.release();
    },
    query: (text, params) => pool.query(text, params),
};
