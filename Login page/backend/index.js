const express =require("express")
const cors =require("cors")
const app = express()

app.use(express.json())
app.use(cors());
app.use('/user', require('./Routes/user'))

app.get('/',(req,res)=>{
    res.send("<h1>Backend Working</h1>")
})

app.listen(5000,()=>{
    console.log(`Server is running on http://localhost:5000`)
})

// const express = require('express');
// const cors = require('cors');
// const jwt = require('jsonwebtoken'); 
// const crypto = require('crypto');
// const app = express();

// app.use(express.json());
// app.use(cors());

// const jwtSecret = crypto.randomBytes(32).toString('hex');

// app.use('/user', (req, res, next) => {
//   const token = req.header('x-auth-token');

//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, jwtSecret);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// });


// app.use('/user', require('./Routes/user'));

// app.get('/', (req, res) => {
//   res.send("<h1>Backend Working</h1>");
// });

// app.listen(5000, () => {
//   console.log(`Server is running on http://localhost:5000`);
// });

// console.log('Generated Secret Key:', jwtSecret);