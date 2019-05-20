const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const passport = require('passport');
const Card = require('../database/models/Card');

router.get('/', (req, res) => {
  new Card()
    .fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
    .then((results) => {
      let resultsObj = results;
      return res.json(resultsObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req, res) => {
  new Card()
    .save({
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority,
      status_id: req.body.status,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to,
    })
    .then(() => {
      return res.json({
        title: req.body.title,
        body: req.body.body,
        priority_id: req.body.priority,
        status_id: req.body.status,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/:id', (req, res) => {
  const body = req.body;
  new Card({ id: body.id })
  .save({
    title: body.title,
    body: body.body,
    priority_id: body.priority,
    status_id: body.status,
    created_by: body.created_by,
    assigned_to: body.assigned_to,
  })
  .then(()=> {
    new Card({id: body.id })
    .fetch({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
    .then((results) => {
      let resultsObj = results;
      return res.json(resultsObj);
    })
  })
  .catch((err) => {
    console.log(err);
  })
});

router.delete('/:id', (req, res) => {
  new Card({
    id: req.params.id,
  })
    .destroy()
    .then(() => {
      new Card().fetchAll().then((results) => {
        return res.json(results);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
