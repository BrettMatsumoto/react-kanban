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
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return res.json({
    title: req.body.title,
    body: req.body.body,
    priority: req.body.priority,
    status: req.body.status,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to,
  });
});

router.get('/new', (req, res) => {
  return res.send('/api/card/new smoke test');
});

router.get('/:id/edit', (req, res) => {
  new Card()
    .where({ id: req.params.id })
    .fetchAll({ withRelated: ['priorities', 'statuses', 'created_by', 'assigned_to'] })
    .then((results) => {
      let resultsObj = results.toJSON();

      return res.json(resultsObj);
    });
});

router.delete('/:id', (req, res) => {
  new Card({
    id: req.params.id,
  })
    .fetch()
    .then((card) => {
      let cardObj = card.toJSON();
      if (req.user.id === cardObj.created_by) {
        new Card({
          id: req.params.id,
        })
          .destroy()
          .then(() => {
            return res.redirect(`/`);
          });
      } else {
        return res.send('User does not own this Card');
      }
    });
});

module.exports = router;