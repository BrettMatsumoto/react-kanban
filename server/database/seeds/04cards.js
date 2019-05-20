exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'Sandwich of Death',
          body: 'Deadlist Sandwich known to Mankind',
          priority_id: 4,
          status_id: 2,
          created_by: 1,
          assigned_to: 1,
        },
        {
          title: 'Sandwich of Life',
          body: 'Only known cure to the Sandwich of Death',
          priority_id: 4,
          status_id: 2,
          created_by: 5,
          assigned_to: 5,
        },
        { title: 'Punch of Death', body: 'Technique #18-1 of Death-Kwon-Do', priority_id: 4, status_id: 2, created_by: 2, assigned_to: 2 },
        { title: 'Step of Death', body: 'Technique #(2*7)+3 of Death-Kwon-Do', priority_id: 4, status_id: 2, created_by: 3, assigned_to: 3 },
        { title: 'Block of Death', body: 'Technique #sqrt(289) of Death-Kwon-Do', priority_id: 4, status_id: 2, created_by: 4, assigned_to: 4 },
      ]);
    });
};
