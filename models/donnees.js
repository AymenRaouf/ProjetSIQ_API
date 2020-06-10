module.exports = (sequelize, type) => {
    return sequelize.define('donnees', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vitesse_max: {
            type: type.FLOAT
        },
        vitesse_moyenne: {
            type: type.FLOAT
        },
        distance: {
            type: type.FLOAT
        },
        carburant: {
            type: type.FLOAT
        }
    })
}