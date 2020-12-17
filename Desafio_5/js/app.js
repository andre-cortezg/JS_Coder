function Articulo(codigo, descripcion, stock, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
    }


let codigo = prompt('Ingrese el codigo del nuevo producto');
let descripcion = prompt('Ingrese la descripcion del producto');
let stock = prompt('Ingrese cantidad en stock');
let precio = prompt('Ingrese el precio');

let articulo_1 = new Articulo(codigo, descripcion, stock, precio);
console.log(articulo_1);