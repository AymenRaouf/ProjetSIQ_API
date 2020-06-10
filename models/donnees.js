module.exports = (sequelize, type) => {
    return sequelize.define('donnees', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vitesse: {
            type: type.INTEGER
        },
        distance: {
            type: type.INTEGER
        },
        carburant: {
            type: type.FLOAT
        }
    })
}