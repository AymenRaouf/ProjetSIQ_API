var Sequelize = require('sequelize'),
    AvoirModel = require('../models/avoir'),
    CollecterModel = require('../models/collecter'),
    DonneesModel = require('../models/donnees'),
    HistoriqueModel = require('../models/historique'),
    ParkingModel = require('../models/parking'),
    VoitureModel = require('../models/voiture');
var host = process.env.DB_HOST,
    name = process.env.DB_NAME,
    user = process.env.DB_USER,
    pass = process.env.DB_PASS;

var sequelize = new Sequelize( name, user, pass, {
    host: host,
    dialect: 'mysql'
});

var Avoir = AvoirModel(sequelize, Sequelize),
    Collecter = CollecterModel(sequelize, Sequelize),
    Donnees = DonneesModel(sequelize, Sequelize),
    Historique = HistoriqueModel(sequelize, Sequelize),
    Parking = ParkingModel(sequelize, Sequelize),
    Voiture = VoitureModel(sequelize, Sequelize);

Voiture.hasMany(Avoir, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Avoir.belongsTo(Voiture);

Historique.hasMany(Avoir, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Avoir.belongsTo(Historique);

Voiture.hasMany(Collecter, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Collecter.belongsTo(Voiture);

Donnees.hasMany(Collecter, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Collecter.belongsTo(Donnees);

Parking.hasMany(Voiture, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Voiture.belongsTo(Parking);


sequelize
    .sync({})
    .then(() => {
            console.log(`Database & tables created!`);
            require('../misc/first_use')();
        })
    .catch(err=>{
        console.error("DB ERROR : ",err)
    })


module.exports = {
    Avoir,
    Collecter,
    Donnees,
    Historique,
    Parking,
    Voiture
}