const fs = require('fs');

var modules = fs.readFileSync('input.txt', 'utf8');
var moduleArr = modules.split("\n").filter((el) => {
    return el != "";
})

function calculateFuel(moduleArr){
    var mass = 0
    var fuel
    var totalFuel = 0
    for (var i in moduleArr){
        mass = moduleArr[i];
        fuel = Math.floor((mass/3)-2);
        totalFuel += calcFuelForFuel(fuel);
    }
    return totalFuel;
}

function calcFuelForFuel(fuelMass){
  var totalFuel = fuelMass;
    while(fuelMass > 0){    
        fuelMass = Math.floor((fuelMass/3)-2)
        if(fuelMass<0)fuelMass = 0;  
        totalFuel += fuelMass;
    }

    return totalFuel;
}

//console.log(calcFuelForFuel(654))
console.log(calculateFuel(moduleArr))

 
