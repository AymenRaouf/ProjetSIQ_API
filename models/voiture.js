module.exports = (sequelize, type) => {
    return sequelize.define('voiture', {
        matricule: {
            type: type.STRING,
            primaryKey: true,
        },
        nomConducteur: {
            type: type.STRING,
            allowNull: false
        },
        ficheTech: {
            type: type.STRING    
        }
    })
}