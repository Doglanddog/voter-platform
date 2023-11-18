const express = require("express");
const router = express.Router();
const members = require("../services/stateServices");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await members.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error getting state-races`, err.message);
    next(err);
  }
});

/* POST programming language */
router.post("/", async function (req, res, next) {
  try {
    res.json(await races.create(req.body));
  } catch (err) {
    console.error(`Error creating state-races`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await members.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating state-races`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await members.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting state-races`, err.message);
    next(err);
  }
});

module.exports = router;