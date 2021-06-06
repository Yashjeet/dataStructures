require('app-module-path').addPath(__dirname);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

process.on('unhandledRejection', (error) => {
    console.log(error);
    logError('unhandledRejection', { error });
});

process.on('uncaughtException', (error) => {
    console.log(error);
    logError('uncaughtException', { error });
});

server.listen(3000, () => {
    console.log(`Express server listening on port ${3000}`);
});
