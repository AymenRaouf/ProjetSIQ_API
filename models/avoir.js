module.exports = (sequelize, type) => {
    return sequelize.define('avoir', {
        dateAvoir: {
            type: type.DATE,
            defaultValue: type.NOW,
        }
    })
}