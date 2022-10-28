import { Producto } from "./app/classProducto.js";
import { eventoCategoria, eventoInput, generarCards, getRequest } from "./app/funciones.js";
import { arrayProductos, btnsCategoria } from "./app/variables.js";


document.addEventListener("DOMContentLoaded", async () => {
    await getRequest()
    generarCards(arrayProductos)
    eventoInput()
    eventoCategoria()
    console.log(arrayProductos);

})
