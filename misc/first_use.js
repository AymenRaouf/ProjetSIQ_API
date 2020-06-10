var {
    Parking,
    Voiture
} = require('../db/index');

var first_use = async function() {
    var parking = await findParking();
    if(!parking){
        parking = await addParking();
        await addVoiture(parking.id);
    } else{
        var voiture = await findVoiture();
        if(!voiture){
            addVoiture();
        }
    }
}

var findParking = function(){
    return new Promise(resolve=>{
        Parking
            .findOne({
                where: {
                    id : 1
                }
            })
            .then(parking=>{
                if (parking!=null) console.log("\nParking Found \n", parking);
                resolve(parking);
            })
            .catch(err=>{
                console.error("\nUnable to find Parking, attempting to create it... : \n", err);
                reject();
            })
    }) 
}

var addParking = function(){
    return new Promise(resolve=>{
        Parking
            .create({
                position: "Alger"
            })
            .then(parking=>{
                console.log("\nParking created successfully\n");
                resolve(parking);
            })
            .catch(err=>{
                console.error("\nUnable to create Parking\n", err); 
                reject();
            })
    })    
}

var findVoiture = function(){
    return new Promise(resolve=>{
        Voiture
            .findOne({
                where: {
                    matricule : "06568 115 05"
                }
            })
            .then(voiture=>{
                if(voiture != null)console.log("\nVoiture Found\n", voiture);
                resolve(voiture);
            })
            .catch(err=>{
                console.error("\nUnable to find voiture, attempting to create it... : \n", err);
                reject();
            })
    })
}

var addVoiture = function(parking){
    return new Promise(resolve=>{
        Voiture
            .create({
                matricule : "06568 115 05",
                nomConducteur: "Omar",
                ficheTech: "Fiche technique de la voiture avec id = 1",
                parkingId : parking
            })
            .then(voiture=>{
                console.log("\nVoiture created successfully\n")
                resolve(voiture);
            })
            .catch(err=>{
                console.error("\nUnable to create Voiture\n", err); 
                reject();
            })
    })
}


module.exports = first_use;