const express = require("express")
const cors = require("cors")
const connectToDb = require('./database/connectDB');
const Contact = require("./database/model/Contact");

const app = express();

app.use(express.json())
app.use(cors());
connectToDb()

app.get('/', async (req, res) => {
    res.send("Backend Working properly")
})

app.post('/api/contact', async (req, res) => {
    try {
        const { fname, email, subject, message } = req.body ?? {}
        if (!fname || !email || !subject || !message) {
            return res.status(400).json({ error: "Invalid Request", success: false })
        }

        const contact = new Contact({
            fullName: fname,
            email,
            subject,
            message
        })

        await contact.save();
        return res.status(201).json({ message: "Message send successfully!", success: true })


    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({ error: "Internal Server Error", success: false })
    }
})

// document.getElementById('smt').addEventListener('submit', function (event) {
//     console.log('Form submitted');
// });


app.listen(5000, () => {
    console.log(`app is listening at http://localhost:5000`);
})

// const express = require('express');
// const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 8001;

// const mongoURI = 'mongodb+srv://sumit:XEwBgDrZ0ptLcYvk@minor.ldnqyj5.mongodb.net/minor';
// const dbName = 'contacts';

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(cors());

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName });

// const Contact = mongoose.model('Contact', {
//     fullName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     subject: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     },
// });

// app.post('/submitForm', async (req, res) => {
//     try {
//         const newContact = new Contact({
//             fullName: req.body.lname,
//             email: req.body.email,
//             subject: req.body.subject,
//             message: req.body.msg,
//         });

//         await newContact.save();

//         MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//             if (err) throw err;

//             const db = client.db(dbName);
//             const collection = db.collection('contacts');

//             const formData = {
//                 firstName: req.body.lname,
//                 email: req.body.email,
//                 subject: req.body.subject,
//                 message: req.body.msg
//             };

//             collection.insertOne(formData, (err, result) => {
//                 if (err) throw err;
//                 console.log('Form data inserted using native driver:', result.ops);
//                 client.close();
//             });
//         });

//         res.send('Form submitted successfully!');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(8001, () => {
//     console.log(`Server listening at http://localhost:8001`);
// });

