module.exports = (sequelize, type) => {
    return sequelize.define('collecter', {
        dateCollecter: {
            type: type.DATE,
            defaultValue: type.NOW,
        }
    })
}