const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time2 = new Schema({
    response : Date,
})

module.exports = mongoose.model('Sche',time2);