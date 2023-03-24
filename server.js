const express = reqire('express')
const mysql = reqire('mysql2')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // 
        user: 'root',

        password: 'Texans17',
        database: 'employeelist_db'
    },
    console.log(`Connected tothe employeelist_db database.`)
);

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