var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mangooseUniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
    title: {type: String, required: true},
    content:  {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(article){
    User.findById(article.user, function(err, user){
        user.articles.pull(article);
        user.save();
    });
});

schema.plugin(mangooseUniqueValidator);

module.exports = mongoose.model('Article', schema);
