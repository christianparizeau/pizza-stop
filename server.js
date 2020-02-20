const express = require('express');
const app = express();
const port = 9000;

app.use(express.static('server/public'));
app.get('/', (req, res) => res.send('Hello World'));
// eslint-disable-next-line
app.listen(port, () => console.log(`Magic happens on port ${port}!`));
