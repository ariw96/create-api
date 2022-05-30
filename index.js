const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const importData = require('./db.json');
let port = process.env.PORT || 3000;
app .get('/', (req, res) => {
    res.send('Hello World update!');
})
app.get("/shoes", (req, res) => {
    res.send(importData);
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`);
});
 