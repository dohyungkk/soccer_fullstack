const { Model } = require('objection')

class teamInfo extends Model {
    static get tableName() {
        return 'teamInfo'
    }

    // static get relationMappings() {
    //     return {
    //         teamInfo: {
    //           relation: Model.HasOneRelation,
    //           modelClass: Animal,
    //           join: {
    //             from: 'persons.id',
    //             to: 'animals.ownerId'
    //           }
    //         },
    //     }
    // }
}
module.exports = teamInfo