module.exports = (sequelize, type) => {
    return sequelize.define('parking', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: type.STRING,
            allowNull: false,
        }
    })
}