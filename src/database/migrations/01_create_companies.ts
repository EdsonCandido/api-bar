import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('companies', table => {
        table.increments('cod').primary();
        table.string('name').notNullable();
        table.string('document').notNullable();
        table.string('fantasy_name').notNullable();
        table.string('value_month')
        table.string('tables')
        table.decimal('service_charge').notNullable();

        table.boolean('active').defaultTo(true);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('companies');
}