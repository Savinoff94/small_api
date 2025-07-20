exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('status').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('todos')
}