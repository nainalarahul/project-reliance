const mysql = require('mysql');
const cors = require('cors');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sqltest123@',
  database: 'testdb'
});



  db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + db.threadId);
  });

const express = require('express');
const app = express();
app.use(cors());
app.post('/data', (req, res) => {
    const data = { name: 'John', age: 25 };
    const sql = 'INSERT INTO data SET ?';

    db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Data added to database');
    });
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM data', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
// a request to http://localhost:3000/data can give us the data reqd

db.on('error', function(err) {
  console.log("[mysql error]",err);
});