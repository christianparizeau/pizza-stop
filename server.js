const express = require('express');
const dbParams = require('./_config.js');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const router = express.Router();
const app = express();
const port = 9000;
const { host, user, password, database } = dbParams;

const getDbLink = () => {
  const connection = mysql.createConnection({ host, password, user, database });
  connection.connect();
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

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  // eslint-disable-next-line
  console.log('A response has been received!');
  next();
});

router.get('/products', (req, res) => {
  const connection = getDbLink();
  const query = req.query.productId
    ? `SELECT * FROM products WHERE productId = ${req.query.productId} `
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
    `DELETE FROM cartItems WHERE cartId = ${req.session.cartId} `,
    err => {
      if (err) throw err;
    }
  );
  connection.query(
    `DELETE FROM carts WHERE cartId = ${req.session.cartId} `,
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
  ON products.productId = cartItems.productId
  WHERE cartItems.cartId = ${req.session.cartId} `;
  connection.query(getItemsFromCartQuery, (err, rows, fields) => {
    if (err) throw err;
    res.json({ message: rows });
  });
});

router.post('/cart', (req, res) => {
  const connection = getDbLink();
  postToCart(connection, req, res, req.session.cartId);
});

app.use('/api', router);
// eslint-disable-next-line
app.listen(port, () => console.log(`Magic happens on port ${port} !`));

const postToCart = (connection, req, res, cartId) => {
  getCartId(connection, req, res, cartId);
};

const getCartId = (connection, req, res, cartId) => {
  if (cartId) {
    getProductPrice(connection, req, res);
  } else {
    const generateCartIdQuery = `INSERT INTO carts (createdAt)
                                     VALUES (${null})`;
    connection.query(generateCartIdQuery, (err, result) => {
      if (err) throw err;
      req.session.cartId = result.insertId;
      getProductPrice(connection, req, res);
    });
  }

};

const getProductPrice = (connection, req, res) => {
  const getProductPriceQuery = `SELECT price FROM products WHERE productId = ${req.body.productId} `;
  connection.query(getProductPriceQuery, (err, rows, fields) => {
    if (err) throw err;
    const price = rows[0].price;
    insertIntoCart(connection, req, res, price);
  });
};

const insertIntoCart = (connection, req, res, price) => {
  const insertIntoCartQuery = `INSERT INTO cartItems(cartId, productId, price)
  VALUES(${req.session.cartId}, ${req.body.productId}, ${price})
  ON DUPLICATE KEY UPDATE quantity = quantity + 1`;
  connection.query(insertIntoCartQuery, (err, result) => {
    if (err) throw err;
    getCartItemData(connection, req, res, result.insertId);
  });
};

const getCartItemData = (connection, req, res, cartItemId) => {
  const cartItemDataQuery = `SELECT products.name, products.productId,
  products.price, products.image,
  products.shortDescription,
  cartItems.quantity,
  cartItems.createdAt,
  cartItems.cartItemId as id
  FROM products JOIN cartItems
  ON products.productId = cartItems.productId
  WHERE cartItems.cartItemId = ${cartItemId} `;
  connection.query(cartItemDataQuery, (err, rows) => {
    if (err) throw err;
    res.send(rows[0]);
  });
};
