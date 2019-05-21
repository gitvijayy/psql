
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones_latest', function(table){
      table.string('description');
      table.date('date_achieved');
      table.increments('id')
      table.integer('famous_person_id')
    .references('famous_people.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones_latest')
  ])
};
