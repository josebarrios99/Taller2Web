const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app,db){
    app.get('/store', function (req, res) {
  
        var filters = {}

        if(req.query.price_lt){
            filters.price = {
                $lt: parseInt(req.query.price_lt)
            }
        }
        if(req.query.price_gt){
            filters.price = {
                $gt: parseInt(req.query.price_gt)
            }
        }
        if(req.query.search){
            filters.playerMode = {
                    $regex: new RegExp(req.query.search, 'i')
                }
        }
      
          const collection = db.collection('products');
              // Find some documents
              collection.find(filters).toArray(function(err, docs) {
                assert.equal(err, null);
                var context = {
                  list: docs,
                }
                res.render('games', context);
              });
        });
        app.get('/product/:name/:id', function (req, res) {
          var context = {};
          var foundElement =  products.find(function(elem){
            if(elem.title == req.params.name){
              return true;
            }
          });
          context = foundElement;
          res.render('product', context);
        });
      
}

module.exports = configureRoutes;