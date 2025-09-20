const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

router.post("/create", (req, res, next) => {
  const { title, details, createdAt } = req.body;

  Entry
    .findOne(
      { title: title }
    )
    .exec()
    .then(results => {
      if (results) {
        return res.status(409).json({
          message: "Title Already Exists"
        });
      };

      const newEntry = new Entry({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        details: details,
        createdAt: createdAt
      });

      newEntry
        .save()
        .then(result => {
          return res.status(200).json({
            message: "Entry Saved Successfully",
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(err.status || 500).json({
            message: err.message || "An Error Occured",
          });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(err.status || 500).json({
        message: err.message || "An Error Occured",
      });
    });
});

router.get("/entries", (req, res, next) => {
  Entry
    .find()
    .exec()
    .then(results => {
      console.log(results)
      res.status(200).json({
        entries: results,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(err.status || 500).json({
        message: err.message || "An Error Occurred",
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const entryId = req.params.id;
  
  Entry
    .findByIdAndDelete({ _id: entryId})
    .exec()
    .then(result => {
      if (!result) {
        return res.status(404).json({
          message: "Entry Not Found",
        });
      };

      return res.status(200).json({
        message: "Entry Deleted Successfully",
      });
    })
    .catch(err => {
      console.error(err);
      res.status(err.status || 500).json({
        message: err.message,
      });
    });
});


module.exports = router;
