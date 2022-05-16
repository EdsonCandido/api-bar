import {Knex} from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('comsumptions', table => {
        table.increments('id').primary();
        
        table.integer('cod_table')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('tables')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        table.integer('cod_user')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.integer('cod_product')
            .notNullable()
            .unsigned()
            .references('cod')
            .inTable('products')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        table.boolean('active').defaultTo(true);
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('comsumptions');
}