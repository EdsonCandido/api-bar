import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('profiles', table => {
        table.increments('cod').primary();
        table.string('name').notNullable();

        table.boolean('active').defaultTo(true);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('profiles');
}