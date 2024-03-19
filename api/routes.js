const express = require('express');
const { ObjectId } = require('mongodb');

const router = express.Router();

router.post('/note', (req, res) => {
  // Buat koneksi ke server
  const { notesCollection } = req.app.locals;

  // Simpan data le collection notes
  notesCollection.insertOne(req.body).then((result) => {
    console.log(result);
  });

  // kirim status dan pesan dalam bentuk json ke client
  res.status(200).json('Data succesfully saved');
});

router.get('/notes', (req, res) => {
  const { notesCollection } = req.app.locals;
  // read all data
  notesCollection.find().toArray.then((result) => {
    res.status(200).json(result);
  });
});

router.get('/note/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.findOne({ _id: ObjectId(req.params.id) }).then((result) => {
    res.status(200).json(result);
  });
});

router.put('/note/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: { title: req.body.title, note: req.body.note } })
    .then((result) => {
      console.log(result);
    });

  res.status(200).json('Data succesfully updated');
});

router.delete('/note/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
    console.log(result);
  });

  res.status(200).json('Data succesfully deleted');
});

module.exports = router;
