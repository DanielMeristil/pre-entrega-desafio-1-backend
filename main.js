//1.Detectar productos en stock en la tienda.
class ProductMnager{
constructor() { 
     this.products = [];

    let productos  = [
    {
    tilulo: "television",
    nombre: "sony",
    descripcion: "television led 24 pulgadas",
    precio: 200,
    code:"abc122",
    id: 7,
    stock: 2

},{
    titulo: "computadoras",
   nombre: "hp 2T 8RAM",
   descripcion: "la super maquina poderosa",
   precio: 500,
   code: "abc123",
   id: 9,
   stock: 5

},{
    titulo: "lavadora",
   nombre: "Samsung",
   descripcion: "una lavadora robotica",
   precio: 1000,
   code: "abc124",
   id: 5,
   stock:0
}];


// addProducts(titulo, nombre, descripcion, precio, code, id, stoct); 
//
 {
    this.products.push({titulo, nombre, descripcion, precio, code, id, stock });
 }
 getProducts(); {
    return this.products;
 }
}
getproductById(id){
    if(!this.products.find((products)=>products.id === id)) {
        console.log("not found")
    } else{
        console.log("Existe")
    }
}
}


let productosConStock = [];
for (let producto in productos){
  if(productos.stock > 0){
    productosConStock.push(productos)
  }
}
console.log(productosConStock);


//2 Buscar productos que se vende más de 100 en la tienda
let productos = [
    {
    
    titulo: "audifonos",
    audifonos: "Samsung",
    imagen: "sin img",
    descripcion: "la super audifono 100% inalabrico",
    precio:20,
    stock: 500,
    code: "abc103",
    id: 3,
    ventas: 70


},{

  titulo: "perfume",
  Perfume: "chrome loris azaro",
  imagen: "sin img",
  descripcion: "la fragancia más perfecta para una noche de locura",
  precio: 1200,
  code: "abc178",
  id: 7,
  stock: 300,
  ventas: 150

},{

   titulo: "libro",
   libro: "American Accent training",
   imagen: "sin img",
   descripcion: "New methode to learn american english accent",
   precio: 200,
   code: "abc143",
   id: 9,
   stock: 150,
   ventas: 90

}]



let productosConVentas = []
for (let producto of productos){
    if (producto.ventas > 100){
     productosConVentas.push(producto)
    }
}
console.log(productosConVentas)

//Usuarios mayores de 18 años que compren en la tienda.
 let Usuarios = [{
    Barbara: "clinente 1",
    descripcion: "cliente de telefonos celulares samsung",
    edad: 15
 
},{
   Rebeka: "cliente 2",
   descripcion: "cliente de champoo",
   edad: 17

 },{
    Luis: "cliente 3",
    descripcion: "cliente vestidor de bodas",
    edad: 50
 },{
    Karen: "cliente 4",
    descripcion: "cliente de pankeke",
    edad: 46
 }]

 let UsuariosConEdades = []
 for (let Usuario of Usuarios){
    if(Usuario.edad > 18 ){
      UsuariosConEdades.push(Usuario)
    }
 }

console.log(UsuariosConEdades)



// Resgistrador de tickets de eventos
class TicketManager{
    constructor() {
        this.eventos = [];
    }

    static id = 0
    addEventos (nombre, lugar, precio, capacidad, fecha) {
        TicketManager.id++
        this.eventos.push({ titulo, lugar, capacidad, fecha, id:TicketManager.id});
    }


    getEvento() {
        return this.eventos
    }
    
    getEventoById(id){
        if (this.eventos.find((evento) => evento.id === id )){
            console.log("not found")
        }else{
            console.log(existe)
        }
    }
}
const eventos = new TicketManager
eventos.addEventos("nombre, consierto de rock del año", "lugar, amozano de brazil", "precio, 0.15", "capacidad, 50", "fecha, hoy")
console.log(eventos.getEvento())
eventos.getEventoById(2)