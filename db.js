const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/comic-book-shop';

const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        const { name, host } = db.connection;
        console.log(`Connected to ${name} DB in ${host}`);
    } catch (error) {
        console.log('There has been an error connecting to the db.', error);
    }
};

module.exports = {
    DB_URL,
    connect,
};
