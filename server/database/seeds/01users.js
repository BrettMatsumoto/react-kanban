'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          first_name: 'Brett',
          last_name: 'Matsumoto',
          email: 'brett@email.com',
          password: bcrypt.hashSync('brettPassword', saltRounds),
        },
        {
          first_name: 'Luke',
          last_name: 'Fiorio',
          email: 'luke@email.com',
          password: bcrypt.hashSync('lukePassword', saltRounds),
        },
        {
          first_name: 'Frank',
          last_name: 'Heggeness',
          email: 'frank@email.com',
          password: bcrypt.hashSync('frankPassword', saltRounds),
        },
        {
          first_name: 'Brenda',
          last_name: 'Flores',
          email: 'brenda@email.com',
          password: bcrypt.hashSync('brendaPassword', saltRounds),
        },
        {
          first_name: 'Ronald',
          last_name: 'Nagata',
          email: 'ronald@email.com',
          password: bcrypt.hashSync('ronaldPassword', saltRounds),
        },
      ]);
    });
};
