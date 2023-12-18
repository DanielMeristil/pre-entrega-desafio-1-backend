//1.Detectar productos en stock en la tienda.
let Productos = [{
    
    Television: "sony",
    descripcion: "television led 24 pulgadas",
    precio: 200,
    stock: 2
},{
   computadoras: "hp 2T 8RAM",
   descripcion: "la super maquina poderosa",
   precio: 500,
   stock: 5

},{
   lavadora: "Samsung",
   descripcion: "una lavadora robotica",
   precio: 1000,
   stock:0
}]

let ProductosConStock = [];
for (let producto in Productos){
   if(Productos.stock > 0){
    ProductosConStock.push(Productos)
   }
}
console.log(ProductosConStock);


//2 Buscar productos que se vende más de 100 en la tienda
let productos = [{

    audifonos: "Samsung",
    imagen: "img",
    descripcion: "la super audifono 100% inalabrico",
    precio:20,
    stock: 500,
    ventas: 70


},{
  Perfume: "chrome loris azaro",
  imagen: "img",
  descripcion: "la fragancia más perfecta para una noche de locura",
  precio: 1200,
  stock: 300,
  ventas: 150

},{
   libro: "American Accent training",
   imagen: "img",
   descripcion: "New methode to learn american english accent",
   precio: 200,
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