const express = require('express');
const path = require('path');
const {connectToMongo} = require('./connection');
const staticRoute = require('./routes/staticRouter');
const app = express();
const PORT = 3000;

connectToMongo('mongodb://127.0.0.1:27017/snipUrl').then(() => console.log('MongoDb Connected'));

const urlRoute = require('./routes/url');

const URL = require('./models/url');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));

app.use('/url', urlRoute);
app.use('/', staticRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectUrl);
  });

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`);
});