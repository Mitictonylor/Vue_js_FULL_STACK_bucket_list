const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });
  router.post('/', (req,res) => {
    const newCountry = req.body;
    collection.insertOne(newCountry)
    .then(result => res.json(result.ops[0]))//because it brings back an object with result key and an ops key with an array with the object as new game

  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result)
    })});


    router.put('/:id', (req,res) => {
  const id = req.params.id
  const updatedCountry = req.body
  collection.findOneAndUpdate(
    {_id: ObjectID(id)},
    {$set: updatedCountry},//it will return the game before has been update, we want the updated game backe so we need to do
    {returnOriginal: false}//so instead of the original will give us back the updated
  ).then(result => res.json(result.value))
})

  return router;

};

module.exports = createRouter;
