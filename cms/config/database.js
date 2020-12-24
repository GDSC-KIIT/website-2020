const dbUriParse = require('pg-connection-string').parse;
const config = dbUriParse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                database: config.database,
                host: config.host,
                port: config.port,
                username: config.user,
                password: config.password,
                ssl: {
                    rejectUnauthorized: false
                }
            },
            options: {
                ssl: true
            },
        },
    },
});

//module.exports = ({ env }) => ({
//    defaultConnection: 'default',
//    connections: {
//        default: {
//            connector: 'bookshelf',
//            settings: {
//                client: 'sqlite',
//                filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//            },
//            options: {
//                useNullAsDefault: true,
//            },
//        },
//    },
//});
