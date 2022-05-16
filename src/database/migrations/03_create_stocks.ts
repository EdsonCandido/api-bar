import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('stocks', table => {
        table.increments('cod').primary();
        table.string('stock').notNullable();

        table.integer('cod_product')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('products')
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
    return knex.schema.dropTable('stocks');
}