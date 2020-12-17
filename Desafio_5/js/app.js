
function Articulo(_codigo, _descripcion, _stock, _precio) {
        this.codigo = _codigo;
        this.descripcion = _descripcion;
        this.stock = _stock;
        this.precio = _precio;
    }


let codigo = prompt('Ingrese el codigo del nuevo producto');
let descripcion = prompt('Ingrese la descripcion del producto');
let stock = prompt('Ingrese cantidad en stock');
let precio = prompt('Ingrese el precio');

let articulo_1 = new Articulo(codigo, descripcion, stock, precio);
console.log(articulo_1);