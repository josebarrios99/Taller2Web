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
        if(req.query.age_lt){
            filters.age = {
                $lt: parseInt(req.query.age_lt)
            }
        }
        if(req.query.age_gt){
            filters.age = {
                $gt: parseInt(req.query.age_gt)
            }
        }
        if(req.query.search){
            filters.genre = {
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
            const filter = {
                _id: {
                    $eq: new ObjectId(req.params.id)
                }
            };
            const collection = db.collection('products');
            // Find some documents
            collection.find(filter).toArray(function(err, docs) {
              assert.equal(err, null);
              var context = docs[0]
              res.render('product', context);
            });
          });
      
}

module.exports = configureRoutes;