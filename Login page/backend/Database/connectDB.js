const mongoose = require("mongoose")

const ConnectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sumit:XEwBgDrZ0ptLcYvk@minor.ldnqyj5.mongodb.net/minor', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected...')
    }
    catch (err) {
        console.log(err);
    }
}

module.exports  = ConnectToDB