//Class based object creation

/*public class Plant {
    public int type = tree;
    public int time = annual;
    public string name = "avocadoTree";
    public int climate = "tropical";
}

Plant plant = new Plant();*/

// Prototype-based

var plant = {
    type : "tree",
    time : "annual",
    name : "avocado tree",
    climate : "tropical"
};

console.log(plant.type);
