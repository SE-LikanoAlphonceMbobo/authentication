const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

// initialize express
const app = express();
// use cors
app.use(cors());
app.use(express.json());


// database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactsignup"
})

// API posting data from our registration form
app.post('/reactsignup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

// API posting data from our registration form
app.post('/reactlogin', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
     db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }else{
            return res.json("Failed");
        }
    })
})

app.listen(8081, () => {
    console.log("listing");
})