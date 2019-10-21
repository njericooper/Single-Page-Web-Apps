function vegetation () {
    plant1 = "I'm green";
    var plant2 = "Im a tree";
}

vegetation();
console.log( plant1 );
//console.log( plant2 ); //throws undefined error

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

//functions

var flower = function () {
    console.log('flower called');
};

flower();

//self executing anonymous functions

var myapp = function () {
    var private_variable = "private";
};

myapp();
//console.log(private_variable); //error. Undefined

//self-executing function

(function () {
    //do something
}) () ;

(function () {
    console.log(local_var);

    var local_var = 'Local Variable!';

    //local_var is 'local Var'
    console.log(local_var);
}());

(function (what_to_eat) {
    var sentence = 'I am going to eat a ' + what_to_eat;
    console.log(sentence);
}) ('sandwich'); //input is passed at the end

// the previous function is the same as

var eatFunction = function (what_to_eat) {
    var sentence ='I am going to eat some ' + what_to_eat;
    console.log( sentence );
};
eatFunction( 'leftovers' );

(function ( $ ) { // the prototype function up until this point 
    console.log( $ ); // the jQuery Object withtin the function scope
})( jQuery );