var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stecnica');

module.exports = mongoose;