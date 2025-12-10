const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '34.73.51.247',
  user: 'nodeuser',
  password: 'Password123$',
  database: 'testInstallation'
});

const book = { title: 'Your Book Title', author: 'Michael Johnson' };

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected');

  connection.query('INSERT INTO book SET ?', book, function (err, result) {
    if (err) throw err;
    console.log('Inserted row id', result.insertId);

    connection.query('SELECT * FROM book', function (err, rows) {
      if (err) throw err;
      console.log(rows);
      connection.end();
    });
  });
});
