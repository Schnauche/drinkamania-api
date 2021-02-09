const express = require('express');
const mountRoutes = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

// This will 'use' all routes provided in routes/index.js
mountRoutes(app);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Listening on port ${port}`);