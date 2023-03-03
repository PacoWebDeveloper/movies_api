require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT,
        host: process.env.HOST,
        nodeEnv: process.env.NODE_ENV,
        secretOrKey: process.env.JWT_SECRET,
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOM,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET
        }
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'PacoRo0t',
            database: 'movies',
            define: {
                timestamps: true,
                underscoredAll: true
            }
        },
        production: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscoredAll: true
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: true
                }
            }
        }
    }    
}

module.exports = config