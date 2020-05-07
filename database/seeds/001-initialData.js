
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Vic', bio: "born in LA"},
        {name: 'Dave', bio: "born in Santa Cruz"},
      ]);
    });
};
