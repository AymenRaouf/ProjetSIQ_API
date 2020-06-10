module.exports = (sequelize, type) => {
    return sequelize.define('historique', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        etat: {
            type: type.STRING
        }
    })
}