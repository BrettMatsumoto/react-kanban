exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'Load node_modules',
          body: 'load modules as needed',
          priority_id: 4,
          status_id: 2,
          created_by: 1,
          assgined_to: 1,
        },
        {
          title: 'Make Repo',
          body: 'make directories/files as needed',
          priority_id: 4,
          status_id: 2,
          created_by: 5,
          assgined_to: 5,
        },
        { title: 'JS', body: 'Everything JS', priority_id: 4, status_id: 2, created_by: 2, assgined_to: 2 },
        { title: 'HTML', body: 'Everything HTML', priority_id: 4, status_id: 2, created_by: 3, assgined_to: 3 },
        { title: 'CSS', body: 'Everything CSS', priority_id: 4, status_id: 2, created_by: 4, assgined_to: 4 },
      ]);
    });
};
