
exports.up = function (knex) {
    //TODO --- VIN, make, model, and mileage.
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments('id'),
            tbl.string('VIN', 17)
                .notNullable()
                .unique(),
            tbl.string('make')
                .notNullable(),
            tbl.string('model').notNullable(),
            tbl.integer('mileage').notNullable(),
            tbl.string('transmission ').notNullable(),
            tbl.string('title').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealer')
};
