let iva = 0.15;
let precioFinal;

function calcularIva(precio){
  let ivaProducto = precio * iva;
  console.log(`el IVA del producto es ${ivaProducto}`)
  precioFinal = precio - ivaProducto; 
}


