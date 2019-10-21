var global_var;

first_function();

function first_function() {
    var first_var;
    second_function(); // runs second function
}

function second_function() {
    var second_var = "cheese";
    console.log(second_var);
}

second_function(); //runs second function again
