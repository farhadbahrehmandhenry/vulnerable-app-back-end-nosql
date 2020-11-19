'use strict';
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: {type: String},
    password: {type: String}
});

mongoose.model('User', userSchema);