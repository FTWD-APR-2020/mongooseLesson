const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', {
    name: String,
    fur: String,
    age: Number,
    favFood: String,
    username: {
        type: String,
        default: 'No username was entered'
    }
});

module.exports = { Cat }
