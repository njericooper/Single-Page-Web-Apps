function vegetation () {
    plant1 = "I'm green";
    var plant2 = "Im a tree";
}

vegetation();
console.log( plant1 );
console.log( plant2 );

//prototype chain

var plant = {
    common_name : "Poison Ivy",
    scienific_name : "Toxicodendron radicans", 
    family : "Anacardiaceae", 
    order : "Sapindales", 
    kingdom : "Plantae", 
    life_cycle : "annual" 
};

// Multiple objects 

var proto = {
    kingdom : "Plante", 
    
}
