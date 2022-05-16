import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('products', table => {
        table.increments('cod').primary();
        table.string('name').notNullable();
        table.string('photo')

        table.boolean('active').defaultTo(true);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('products');
}