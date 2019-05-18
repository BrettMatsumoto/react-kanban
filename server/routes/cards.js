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

router.put('/:id/edit', (req, res) => {
  const body = req.body;
  new Card()
    .where({ id: body.id })
    .then(() => {
      new Card({ id: body.id })
      .save({
        title: req.body.title,
        body: req.body.body,
        priority_id: req.body.priority,
        status_id: req.body.status,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to,
      },
      { patch: true},
      )
      .then(()=> {
        return res.redirect('/');
      })
    })
});

router.delete('/:id', (req, res) => {
  console.log('test********************')
  new Card({
    id: req.params.id,
  })
    .destroy()
    .then(() => {
      new Card().fetchAll().then((results) => {
        console.log(results);
        return res.json(results);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
