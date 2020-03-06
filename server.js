const express = require('express');
const dbParams = require('./_config.js');
const mysql = require('mysql');
const session = require('express-session');
const router = express.Router();
const app = express();
const port = 9000;
const host = dbParams.host;
const user = dbParams.user;
const password = dbParams.password;
const database = dbParams.database;

const getDbLink = () => {
  const connection = mysql.createConnection({ host, password, user, database });
  connection.connect(err => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('Connected to MySQL!');
  });
  return connection;
};
app.set('trust proxy', 1);
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'Bemdai Pamko'
}));
router.use((req, res, next) => {
  // eslint-disable-next-line
  console.log('A response has been received!');
  next();
});
router.get('/products', (req, res) => {
  const connection = getDbLink();
  const query = req.query.productId
    ? `SELECT * FROM products WHERE productId = ${req.query.productId}`
    : 'SELECT productId,name,price,image,shortDescription FROM products';
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;
    res.json({ message: rows });
    connection.end();
  });

});
router.delete('/orders', (req, res) => {

  res.json(req.sessionID);
});

router.get('/cart', (req, res) => {
  res.json({ message: 'Cart worked!' });

});

app.use('/api', router);
// app.get('/', (req, res) => res.send('Hello World'));
// app.get('api/', (req, res) => res.send('This Worked!'));
// eslint-disable-next-line
app.listen(port, () => console.log(`Magic happens on port ${port}!`));
