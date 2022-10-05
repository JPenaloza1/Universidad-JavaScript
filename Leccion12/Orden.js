class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor( producto ) {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; 
        // this._contadorProductosAgregados = 0;
    }

    agregarProducto(producto) {
        if( this._productos.length < Orden.MAX_PRODUCTOS ) {
            this._productos.push(producto);
            // this.productos[this._contadorProductosAgregados] = producto;
        } else {
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for( let producto of this._productos ) {
            totalVenta += producto.precio;
        }
    }

    mostrarOrden() {
        let productosOrden = " ";
        for( let producto of this._productos ) {
            productosOrden += producto.toString() + " ";
        }
        
        console.log(`idOrden: ${this._idOrden}
                   , total: ${this.totalVenta} 
                   , Productos: ${this.productosOrden}`);
    }
}