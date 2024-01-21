require('dotenv').config()
const mongoose = require('mongoose')

const connectToDb = async () => {

    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('mongodb conncted successfully');
    } catch (error) {
        console.log('error connecting DB', error);
    }
}

module.exports = connectToDb