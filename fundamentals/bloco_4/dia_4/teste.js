let pizza = {
  sabor: 'Palmito',
  preco: 39.90,
  borda: true,
}

for (key in pizza) {
  console.log('objeto pizza: ' + key);
}

let pizzas = ['margherita', 'palmito', 'portuguesa'];

for (key of pizzas) {
  console.log('array pizzas: ' + key);
}

for (key in pizzas) {
  console.log(key);
}
