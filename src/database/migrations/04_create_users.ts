import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('document').notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('phone');
        table.string('photo');
        table.decimal('day_price');

        table.integer('cod_profile')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('profiles')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        table.integer('cod_company')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('companies')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.boolean('active').defaultTo(true);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}