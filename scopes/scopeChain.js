var regular_plant = 'I am a plant, here to grow!';

console.log(regular_plant);

function superGarden() {
    var regular_plant = 'regular_plant is assigned';
    console.log(regular_plant);

    function flowerPot(){
        var regular_plant;
        console.log(regular_plant);
    }
    flowerPot();
}
superGarden();


// Scope Chain Example where the variable is defined in only one scope

var plant_power = 'I am here to drink clean water and synthasize sunlight!';
console.log(plant_power);

function theGarden() {
    console.log(plant_power);

    function hydroponics(){
        console.log(plant_power);
    }
    hydroponics();
}
theGarden();
