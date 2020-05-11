const mongoose = require('mongoose');

const Dog = mongoose.model("Dog", {
    name: String,
    toys: Array,
    peed: {type: Boolean, default: false}
})


module.exports = Dog
