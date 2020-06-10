var {
    Avoir,
    Collecter,
    Donnees,
    Historique,
    Parking,
    Voiture
} = require('../db/index');


var fillDB = (data) => {
    return new Promise(resolve=>{
        var donnees = {
                vitesse_max : data.vitesse_max,
                vitesse_moyenne : data.vitesse_moyenne,
                distance : data.distance,
                carburant : data.carburant
        },
            collecter = {
                matriculeId : data.matricule
            }
        Donnees
            .create(donnees)
            .then(donneesId=>{
                console.log("\nDonnees created.\n");
                collecter.donneesId = donneesId;
                Collecter
                    .create(collecter)
                    .then(collecterId=>{
                        console.log("\nCollecter created.\n");
                    })
                    .catch(err=>{
                        console.error("\nUnable to create Collecter : \n", err);
                        reject();
                    })
            })
            .catch(err=>{
                console.error("\nUnable to create Donnees : \n", err);
                reject();
            })
    })
}


module.exports  = {fillDB};