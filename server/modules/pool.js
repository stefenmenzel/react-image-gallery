const pg = require('pg'); //load in pg
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
}
else {
    config = {
        host: 'localhost', // Server hosting the postgres database
        port: 5432, // env var: PGPORT
        database: 'react_gallery', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
}
//setup PG
const pool = pg.Pool(config);

pool.on('connect', () => {
    console.log('postgres connected');
})

pool.on('error', (error) => {
    console.log('Error with postgres pool:', error);
})

module.exports = pool;