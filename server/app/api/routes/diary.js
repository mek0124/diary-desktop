const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

router.post("/create", (req, res, next) => {
  const { title, details, createdAt } = req.body;

  Entry
    .find(
      { title: Entry.title === title }
    )
    .exec()
    .then(results => {
      if (results.length > 0) {
        return res.status(401).json({
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
          res.status(200).json({
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

module.exports = router;
