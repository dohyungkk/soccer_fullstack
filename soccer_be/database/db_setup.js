const knex = require('knex')
const knexfile = require('./knexfile.js')
const { Model } = require('objection')

function setupDB() {
    const db = knex(knexfile.development)
    Model.knex(db)
}

module.exports = setupDB