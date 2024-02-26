let info =" ";
function carInfo(car){
    
    info ="The " + car.brand +" " + car.model + " was manufactured in " + car.year;
    return info;
}
let car = { brand: 'Toyota', model: 'Camry', year: 2022 };
const car1 = { brand: 'Suzuki', model: 'Honda', year: 2024 };

console.log(carInfo(car));
console.log(carInfo(car1));