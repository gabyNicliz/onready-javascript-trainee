class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }

  getPrice() {
    return this.price;
  }

  formatedPrice() {
    let formatedPrice = Number(parseFloat(this.price).toFixed(2)).toLocaleString('es', {
      minimumFractionDigits: 2
    });
    return formatedPrice;
  }
}

class Car extends Vehicle {
  constructor(brand, model, price, amountOfDoors) {
    super(brand, model, price);
    this.amountOfDoors = amountOfDoors;
  }

  toString() {
    return `Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.amountOfDoors} // Precio: $${this.formatedPrice()}`;
  }
}

class Bike extends Vehicle {
  constructor(brand, model, price, cilinderCapacity) {
    super(brand, model, price);
    this.cilinderCapacity = cilinderCapacity;
  }

  toString() {
    return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.cilinderCapacity}cc // Precio: $${this.formatedPrice()}`;
  }
}

class CarDealer {

  setVehiclesList(vehiclesList) {
    this.vehiclesList = vehiclesList;
  }
  
  addVehicle(vehicle) {
    this.vehiclesList.push(vehicle);
  }

  getVehiclesList() {
    return this.vehiclesList;
  }

  findVehicleByLetterInModel(letter) {
    return this.vehiclesList.find(vehicle => vehicle.getModel().includes(letter));
  }

  // sort by price
  sortVehiclesDecreasingly() {
    let listToSort = [...this.vehiclesList];

    listToSort.sort((a, b) => b.getPrice() - a.getPrice());

    return listToSort;
  }

  getPriciestVehicle() {
    const sortedVehicles = this.sortVehiclesDecreasingly();

    return sortedVehicles[0];
  }

  getCheapestVehicle() {
    const sortedVehicles = this.sortVehiclesDecreasingly();

    return sortedVehicles[sortedVehicles.length - 1];
  }

  printVehiclesList() {
    for (let i = 0; i < this.vehiclesList.length; i++) {
      console.log(this.vehiclesList[i].toString());
    }
  }
}

let carDealer = new CarDealer();

carDealer.setVehiclesList([
  new Car('Peugeot','206', 200000.00, 4),
  new Bike('Honda', 'Titan', 60000.00, 125),
  new Car('Peugeot', '208', 250000.00, 5),
  new Bike('Yamaha','YBR', 80500.50, 160)
]);

carDealer.printVehiclesList();

console.log('=============================');

const priciestVehicle = carDealer.getPriciestVehicle();

console.log('Vehículo más caro:',
  priciestVehicle.getBrand(), priciestVehicle.getModel()
);

const cheapestVehicle = carDealer.getCheapestVehicle();

console.log('Vehículo más barato:',
  cheapestVehicle.getBrand(), cheapestVehicle.getModel()
);
const letter = 'Y';
const foundVehicle = carDealer.findVehicleByLetterInModel(letter);

console.log(
  `Vehículo que contiene en el modelo la letra '${letter}':`,
  foundVehicle.getBrand(),
  foundVehicle.getModel(),
  foundVehicle.formatedPrice()
);

console.log('=============================');

let sortedVehiclesList = carDealer.sortVehiclesDecreasingly();

sortedVehiclesList.forEach(vehicle => {
  console.log(vehicle.getBrand(), vehicle.getModel());
});