class DispositivoEntrada {
    constructor( tipoEntrada, marca ) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set stipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = this.marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor( tipoEntrada, marca ) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Teclado: [idRatón: ${this._idRaton} tipoEntrada: ${this._tipoEntrada} marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor( tipoEntrada, marca ) {
        super( tipoEntrada, marca );
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado} tipoEntrada: ${this._tipoEntrada} marca: ${this._marca}]`;
    }
}

class Monitor {
    static contadorMonitor = 0;

    constructor( marca, tamano ) {
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitor;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get tamano() {
        return this._tamano;
    }
    set tamano(tamano) {
        this._tamano = tamano;
    }

    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor} marca: ${this._marca} tamaño: ${this._tamano}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor( nombre, monitor, teclado, raton ) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor}\n ${this._raton}\n ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora( computadora ) {
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = " ";
        for( let computadora of this._computadoras ) {
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras ${computadorasOrden}`);
    }

}

let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());

let raton2 = new Raton("Bluetooth", "DELL");
console.log(raton2.toString());

let teclado1 = new Teclado("Bluetooth", "MSI");
console.log(teclado1.toString());

let teclado2 = new Teclado("USB", "MSI");
console.log(teclado2.toString());

let monitor1 = new Monitor("HP", 15);
console.log(monitor1.toString());

let monitor2 = new Monitor("DELL", 27);
console.log(monitor2.toString());

let compuatora1 = new Computadora("HP", monitor1, teclado1, raton1);
console.log(compuatora1.toString());

let compuatora2 = new Computadora("HP", monitor2, teclado2, raton2);
console.log(compuatora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(compuatora1);
orden1.agregarComputadora(compuatora2);
orden1.agregarComputadora(compuatora2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(compuatora1);
orden2.agregarComputadora(compuatora2);
orden2.agregarComputadora(compuatora2);

orden2.mostrarOrden();