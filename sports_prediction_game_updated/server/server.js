
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sportspredictiongame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Models
const Game = require('./models/Game');
const Prediction = require('./models/Prediction');
const User = require('./models/User');

// Routes
// ... [Include all routes here]

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
