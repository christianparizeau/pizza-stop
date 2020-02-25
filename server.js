const express = require('express');
const app = express();
const router = express.Router();
const port = 9000;

router.use((req, res, next) => {
  // eslint-disable-next-line
  console.log('A response has been received!');
  next();
});
router.get('/products', (req, res) => {
  res.json({ message: 'Products worked!' });
});
router.get('/cart', (req, res) => {
  res.json({ message: 'Cart worked!' });
});
router.get('/orders', (req, res) => {
  res.json({ message: 'Orders worked!' });
});

app.use('/api', router);
// app.get('/', (req, res) => res.send('Hello World'));
// app.get('api/', (req, res) => res.send('This Worked!'));
// eslint-disable-next-line
app.listen(port, () => console.log(`Magic happens on port ${port}!`));
