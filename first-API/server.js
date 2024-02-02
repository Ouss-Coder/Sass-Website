var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
    {
        "id":"232kak",
        "text":"egges"
    },
    {
        "id":"292gak",
        "text":"Milk"
    },
    {
        "id":"252tas",
        "text":"Meat"
    },
    {
        "id":"222tgs",
        "text":"Frogs Legs"
    }
];


app.get('/ingredients', function(request,response){
    response.send(ingredients);
});

app.post('/ingredients', function(request,response){
    var ingredient = request.body;
    if (!ingredient || ingredient.text === ""){
        response.status(500).send({error: "Your Ingredient must have a text!"});
    }else{
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredients/:ingredientId', function(request,response){
    
    var newText = request.body.text;
   

     for(var x=0; x< ingredients.length; x++){ 
        var ing = ingredients[x];
        if(ing.id === request.params.ingredientId){
            ingredients[x].text = newText;
            break;
        }
    }
    response.send(ingredients)
    
});
//test
app.listen(3000, function(){
    console.log("First API running on port 3000!")
})