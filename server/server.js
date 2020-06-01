"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express app instance
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express();
app.use('/', index_1.router);
app.use('/users', users_1.router);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
