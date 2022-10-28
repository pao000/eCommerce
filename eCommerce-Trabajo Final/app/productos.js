import { generarCards, eventoAgregarProducto } from "./funciones.js";


let categoria = localStorage.getItem("categoria")
let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || []

let busqueda;
switch (categoria) {
    case "cuencos":
        busqueda = arrayProductos.filter(el => el.categoria === "cuencos")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "cucharas":
        busqueda = arrayProductos.filter(el => el.categoria === "cucharas")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "espirales":
        busqueda = arrayProductos.filter(el => el.categoria === "espirales")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

}






