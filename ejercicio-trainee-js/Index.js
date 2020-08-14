class vehiculo {
	constructor(Marca, Modelo, Cilindrada, Puertas, Precio) {
		this.Marca = Marca;
		this.Modelo = Modelo;
		this.Puertas = Puertas;
		this.Precio = Precio;
		this.Cilindrada = Cilindrada;
	}
	printVehiculo() {
		console.log('**********************************************');
		console.log(`${this.Marca} ${this.Modelo}`);
	}
	printCompleto() {
		console.log('**********************************************');
		console.log(
			`Marca= ${this.Marca} // Modelo= ${this.Modelo} // ${
				this.Puertas
					? `Puertas= ${this.Puertas}`
					: `Cilindrada= ${this.Cilindrada}`
			} // Precio= ${this.Precio}`
		);
	}
}

class vehiculos {
	constructor(Vehiculos = []) {
		this.Vehiculos = Vehiculos;
	}
	add(vehiculo) {
		this.Vehiculos.push(vehiculo);
	}
	printCompleto() {
        console.log('**********************************************');
		console.log('TABLA DE DATOS');
		this.Vehiculos.forEach((value) => value.printCompleto());
	}
	printVehiculos() {
		console.log('**********************************************');
		console.log('TABLA DE DATOS');
		this.Vehiculos.forEach((value) => value.printVehiculo());
	}
	caro() {
		console.log('**********************************************');
		const reducerCaro = (acumulador, valorActual) => {
			if (valorActual.Precio > acumulador.Precio) {
				return valorActual;
			} else {
				return acumulador;
			}
		};
		const vehiculoCaro = this.Vehiculos.reduce(reducerCaro);
		console.log(
			`Vehículo más caro: ${vehiculoCaro.Marca} ${vehiculoCaro.Modelo}`
		);
	}
	barato() {
		console.log('**********************************************');
		const reducerBarato = (acumulador, valorActual) => {
			if (valorActual.Precio < acumulador.Precio) {
				return valorActual;
			} else {
				return acumulador;
			}
		};
		const vehiculoBarato = this.Vehiculos.reduce(reducerBarato);
		console.log(
			`Vehículo más barato: ${vehiculoBarato.Marca} ${vehiculoBarato.Modelo}`
		);
	}
	conY() {
		console.log('**********************************************');
		const vehiculoConY = this.Vehiculos.find((element) =>
			element.Modelo.includes('Y')
		);
		console.log(
			`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoConY.Marca} ${vehiculoConY.Modelo}`
		);
	}
	descendente() {
		console.log('**********************************************');
		console.log('Vehículos ordenados por precio de mayor a menor:');
		this.Vehiculos
			.sort((a, b) => {
				let compare = 0;
				if (a.Precio > b.Precio) {
					compare = 1;
				} else if (a.Precio < b.Precio) {
					compare = -1;
				}
				return compare;
			})
			.reverse();
        this.printCompleto()
		console.log('**********************************************');
	}
}

let vehs = new vehiculos();
let veh1 = new vehiculo('Peugeot', '206', '', '4', 200000.0);
let veh2 = new vehiculo('Honda', 'Titan', '125c', '', 60000.0);
let veh3 = new vehiculo('Peugeot', '208', '', '5', 250000.0);
let veh4 = new vehiculo('Yamaha', 'YBR', '160c', '', 80500.5);
vehs.add(veh1);
vehs.add(veh2);
vehs.add(veh3);
vehs.add(veh4);
//Imprime en pantalla
vehs.printCompleto();
//el mas caro
vehs.caro();
//el mas barato
vehs.barato();
//modelo contiene "Y"
vehs.conY();
//orden por precio mayor a menor
vehs.descendente();
