const express = require('express');
const app = express();



// 1
app.get('/greetings/:username', (req, res) => {
   res.send(`Hello there, ${req.params.username}!`);
});


//2
app.get('/roll/:numberInput', (req ,res) => {
   const number = parseInt(req.params.numberInput);
   if (isNaN(number)){
       res.send('You must specify a number.');
   } else {
       res.send(`You rolled a ${Math.floor(Math.random() * (number - 0 + 1) + 0)}`);
   }
})

//3
const collectibles = [
   { name: 'shiny ball', price: 5.95 },
   { name: 'autographed picture of a dog', price: 10 },
   { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
 ];

app.get('/collectibles/:index', (req, res) => {
   const index = req.params.index;
   if (index >= collectibles.length || index < 0){
       res.send('This item is not yet in stock. Check back soon!');
   } else {
       res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price} it can be yours!`);
   }
})

//4
app.get('/shoes',(req,res)=>{
let shoes = [
   { name: "Birkenstocks", price: 50, type: "sandal" },
   { name: "Air Jordans", price: 500, type: "sneaker" },
   { name: "Air Mahomeses", price: 501, type: "sneaker" },
   { name: "Utility Boots", price: 20, type: "boot" },
   { name: "Velcro Sandals", price: 15, type: "sandal" },
   { name: "Jet Boots", price: 1000, type: "boot" },
   { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

if(req.query.hasOwnProperty('min-price')){
    shoes = shoes.filter(shoe => shoe.price >= Number(req.query['min-price']));
}
if(req.query.hasOwnProperty('max-price')){
    shoes = shoes.filter(shoe => shoe.price <= Number(req.query['max-price']));
}
if(req.query.hasOwnProperty('type')){
    shoes = shoes.filter(shoe => shoe.type === req.query['type']);
}
res.send(shoes);
});


app.listen(3000, ()=>{
console.log('Listening on port 3000');
});