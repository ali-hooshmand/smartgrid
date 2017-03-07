var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Article = require('../models/article');
var User = require('../models/user');

router.get('/', function(req, res, next){
    Article.find()
            //.populate('user', 'lastName')
            //.populate('user', 'firstName')
            .populate('user')
            .exec(function(err, articles){
                if(err){
                    return res.status(500).json({
                        title: 'an error occured!',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: articles
                });        
            });
});

router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'aliSecret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title:'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'an error occured!',
                error: err
            });
        }
        var article = new Article({
            title : req.body.title,
            content : req.body.content,
            user: user
        });    
        article.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'an error occured!',
                    error: err
                });
            }
            user.articles.push(result);
            user.save();
            res.status(201).json({
                message: 'article saved!',
                obj: result
            });
        });
    });
});

router.patch('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Article.findById(req.params.id, function(err, article){
        if(err){

            return res.status(500).json({
                title: 'an error occured!',
                error: err
            });
        }
        if(!article){
            return res.status(501).json({
                title: 'an error occured!',
                error: {message: 'No article found!'}
            });
        }
        if( article.user != decoded.user._id){
            return res.status(401).json({
                title:'Not Authenticated',
                error: {message: 'users do not match'}
            });
        }
        article.title = req.body.title;
        article.content = req.body.content;
        article.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'an error occured!',
                    error: err
                });
            }
            res.status(201).json({
                message: 'article updated!',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Article.findById(req.params.id, function(err, article){
        if(err){
            return res.status(500).json({
                title: 'an error occured!',
                error: err
            });
        }
        if(!article){
            return res.status(501).json({
                title: 'an error occured!',
                error: {message: 'No article found!'}
            });
        }
        if( article.user != decoded.user._id){
            return res.status(401).json({
                title:'Not Authenticated',
                error: err
            });
        }
        article.remove(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'an error occured!',
                    error: {message: 'users do not match'}
                });
            }
            res.status(201).json({
                message: 'article deleted!',
                obj: result
            });
        });
    });
});

module.exports = router;
