// index.js

const express = require('express');
const app = express();
const port = 3000;

/**
 * @api {get} / Request Hello World
 * @apiName GetHelloWorld
 * @apiGroup Main
 *
 * @apiSuccess {String} message A simple hello message.
 */
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello from Tyson Foods!' });
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { app, server };
