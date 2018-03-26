const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname+'/views')
app.set('view engine', 'pug');

app.get('/', (req,res) => {
  res.render('fuckyou')
})
app.listen(3000, () => {
  console.log('start fuckyou');
})
