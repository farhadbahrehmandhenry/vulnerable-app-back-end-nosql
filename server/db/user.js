'use strict';
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {type: String},
    password: {type: String}
});

mongoose.model('User', userSchema);