const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9090;

let router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'Hello guys!! This is from ExpressJS' });
});

app.use('/api', router);
app.listen(port);
console.log('Todo Web Api is started on port ' + port);
