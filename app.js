function pizzaOven(estilo, tipo, queso, extras){
    var pizza = {};
    pizza.estilo = estilo;
    pizza.tipo= tipo;
    pizza.queso= queso;
    pizza.extras= extras;
    return pizza;
}

var pizza1=pizzaOven("estilo chicago","tradicional",["morzzarella"],["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2=pizzaOven("lanzada a mano","marinara",["mozzarella" ,"feta"],["champiñones","aceitunas","cebollas"]);
console.log(pizza2);

var pizza3=pizzaOven("a la piedra","italiana",["mozzarella"],["aceitunas","rucula"]);
console.log(pizza3);

var pizza4=pizzaOven("estilo personal","vegetariana",["queso vegano","queso azul"],["choclo","rucula","champiñones"]);
console.log(pizza4);


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

estilo=random(1,4);
tipo=random(1,4);
queso=random(1,4);
extras=random(1,10);

switch(estilo){
    case 1:
        estilo="estilo chicago";
        break;
    case 2:
        estilo="lanzada a mano";
        break;
    case 3:
        estilo="a la piedra";
        break;
    case 4:
        estilo="estilo personal";
        break;
}

switch(tipo){
    case 1:
        tipo="tradicional";
        break;
    case 2:
        tipo="marinara";
        break;
    case 3:
        tipo="italiana";
        break;
    case 4:
        tipo="vegetariana";
        break;
}

switch(queso){
    case 1:
        queso="mozzarella";
        break;
    case 2:
        queso="feta";
        break;
    case 3:
        queso="queso azul";
        break;
    case 4:
        queso="queso vegano";
        break;
}

switch(extras){
    case 1:
        extras="champiñones";
        break;
    case 2:
        extras="choclo";
        break;
    case 3:
        extras="rucula";
        break;
    case 4:
        extras="aceitunas";
        break;
    case 5:
        extras="cebollas";
        break;
    case 6:
        extras="pepperoni";
        break;
    case 7:
        extras="salchichas";
        break;
    case 8:
        extras="pollo";
        break;
    case 9:
        extras="carnes";
        break;
    case 10:
        extras="tomate";
        break;
}

var pizzaRandom= pizzaOven(estilo,tipo,queso,extras);
console.log(pizzaRandom);





