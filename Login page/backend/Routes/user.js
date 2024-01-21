require('dotenv').config()
const express = require('express')
const bycrpt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const ConnectToDB = require("../Database/connectDB")
const User = require("../Database/Models/User")

const app = express();
app.use(express.json())

const Router = express.Router();
ConnectToDB()

Router.get('/', (req, res) => {
    return res.send("<h1>User API Working</h1>")
})

Router.post('/register', async (req, res) => {
    let success = false;
    try {
        const { fname, email, password } = req.body ?? {}
        if (!fname || !email || !password) {
            return res.status(404).json({ error: "Please Provide all Details", success, data: req.body })
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ error: "Email already exists", success })
        }
        // Hashing the Password
        bycrpt.genSalt(10, function (err, salt) {
            if (err) throw err;
            bycrpt.hash(password, salt, async function (err, hash) {
                if (err) throw err;
                const newUser = new User({
                    fullName: fname,
                    email: email,
                    password: hash
                })
                await newUser.save();
                return res.status(201).json({ message: "User Registered Successfully!", success: true, newUser })
            })
        })

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error })
    }
})

Router.post('/login', async (req, res) => {
    let success = false;
    try {
        console.log(process.env.JWT_SECRET, 'jwt secret');
        const { email, password } = req.body ?? {}
        if (!email || !password) {
            return res.status(400).json({ error: "Provide All Credentials", success })
        }
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(404).json({ error: "User Doesn't Exists", success })
        }
        const isValidPassword = await bycrpt.compare(password, userExists.password);
        console.log(isValidPassword, 'isvalidpass');
        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid Credentials" })
        }
        // Create JWT and Return it to the Client Side
        const token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET);
        success = true;
        return res.status(200).json({ token, success, userExists, message: "User LoggedIn Successfully!" })

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error", error })
    }
})

module.exports = Router;