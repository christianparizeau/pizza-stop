const express = require('express');
const dbParams = require('./_config.js');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
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
const sessionStore = new MySQLStore({ host, password, user, database, createDatabaseTable: true });
app.set('trust proxy', 1);
app.use(session({
  store: sessionStore,
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
  const connection = getDbLink();
  connection.query(
    `DELETE FROM cartItems WHERE cartId = ${req.sessionID}`,
    err => {
      if (err) throw err;
    }
  );
  connection.query(
    `DELETE FROM carts WHERE cartId = ${req.sessionID}`,
    err => {
      if (err) throw err;
      res.json({ message: 'Deleted items from cart and cart from carts' });
    }
  );
});

router.get('/cart', (req, res) => {
  res.json({ message: 'Cart worked!' });
  const connection = getDbLink();
  const getItemsFromCartQuery = `SELECT products.name, products.productId,
                                        products.price, products.image,
                                        products.shortDescription,
                                        cartItems.quantity,
                                        cartItems.createdAt,
                                        cartItems.cartItemId as id
                                FROM products JOIN cartItems
                                ON products.productId=cartItems.productId
                                WHERE cartItems.cartId=${req.sessionID}`;
  connection.query(getItemsFromCartQuery, (err, rows, fields) => {
    if (err) throw err;
    res.json({ message: rows });
  });
});
app.use('/api', router);
// eslint-disable-next-line
app.listen(port, () => console.log(`Magic happens on port ${port}!`));
