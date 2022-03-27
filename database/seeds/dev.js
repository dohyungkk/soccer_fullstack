/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // to prevent overwritting to an existing table
    await knex.raw('TRUNCATE TABLE "users" CASCADE')
  
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
      {id: 1, teamData: 'rowValue1'},
      {id: 2, teamData: 'rowValue2'},
      {id: 3, teamData: 'rowValue3'}
    ]);
  };
  