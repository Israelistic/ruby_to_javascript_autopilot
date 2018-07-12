function getNewCar(){
    'city': 'Toronto',
    'passengers': 0,
    'gas': 100,
};

function addCar(cars, newCar){
    cars.push(new_car);
     return console.log("Adding new car to fleet. Fleet size is now " + car.length);
};
addCar()
function pickUpPassenger(car){
    car['passengers'] +=1;
    car['gas'] -= 10;
    return console.log('Picked up passasger. Car now has ' + car['passasgers']) ' passengers.';
};

function getDestination(car){
    if(car['city'] === 'Toronto'){
        console.log('Mississauga');
    }else if(car['city'] === 'Mississauga'){
        console.log('London');
    }else if( car['city'] === 'London'){
        console.log('Toronto');
    };

};

function fillUpGas(){
    var oldGas = car['gas'];
    car['gas'] = 100;
    return console.log('Filled up to ' + getGasDisplay(car['gas']) + 'on gas from ' + getGasDisplay(oldGas) +  '.');

};
function getGasDisplay(gasAmount){
return console.log(gasAmount + '%');
};

function drive(car, cityDistance){

    if(car['gas'] < cityDistance ){
            return fillUpGas(car);
    };
car['city'] = getDestination(car)
car['gas'] -= cityDistance;
console.log('Drove to ' + car['city'] + ' Remining gas: ' + getGasDisplay(car['gas'])+'.');
};
function dropOfPassengers() {
    var previousPassengers = car['passasgers'];
    car['passasgers'] = 0;
    console.log('Dropped off ' + previousPassengers + ' passengers.');
};
function act(car) {
    var distanceBetweenCities = 50
    if (car['gas'] < 20 ){
         return fillUpGas(car);
    }else if(car['passasgers'] < 3){
        return pickUpPassenger(car);
    }else {
        if(car['gas'] < distanceBetweenCities){
            return fillUpGas(car);
        };
        droveTo = drive(car,distanceBetweenCities);
        var passengersDropped = dropOfPassengers(car);
        console.log(droveTo + " " + passengersDropped);
    };
};
function commandFleet(cars){
    for(idex =0; index < cars.length; index++){
         var action = act(cars[index]);
         console.log('Car ' + (index+1) +': ' + action);
    };
    console.log('---');
};

function AddOneCarPerDay(cars, numDays){

    for (index = 0;index < numDays; index++){
        var newCar = getNewCar();
        console.log(addCar(cars, NewCar));
        commandFleet(cars)
    };
};

var cars = [];
AddOneCarPerDay(cars, 10);
