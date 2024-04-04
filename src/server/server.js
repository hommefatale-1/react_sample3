const express = require('express');
const session = require('express-session');
var cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());

// MySQL 연결 설정
var mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'test'
});

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/profile.dox', function (req, res) {
  var map = req.query;
  console.log(map);
  connection.query(`SELECT S.*, COUNT(B.USERID) AS posts
    FROM TBL_SNS_USER S
    INNER JOIN TBL_BOARD B ON S.USERID = B.USERID
    WHERE S.USERID = ?
    GROUP BY S.USERID;`, [map.userId], function (error, results, fields) {
    if (error) throw error

    if (results.length == 0) {
      res.send({ result: "사용자없음" });
    } else {
      res.send(results[0]);
    }
  });
});

app.listen(3000);