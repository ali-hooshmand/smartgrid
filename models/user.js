var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mangooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName:  {type: String, required: true},
    email:     {type: String, required: true, unique: true},
    password:  {type: String, required: true},
    articles: [{type: Schema.Types.ObjectId, ref: 'Article'}]
});

schema.plugin(mangooseUniqueValidator);

module.exports = mongoose.model('User', schema);