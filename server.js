const express = require('express');



const db = require('./db');

const express = reqire('express')


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// query database
db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
});

// 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

