import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('tables', table => {
        table.increments('id').primary();
        table.string('number').notNullable();
        
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
    return knex.schema.dropTable('tables');
}