import { Producto } from "./classProducto.js";
import { arrayCarrito, arrayProductos, btnsCategoria, input, sectionProductos } from "./variables.js";


export const getRequest = async () => {
    let req = await fetch("./productos.json")

    let response = await req.json()
    for (const el of response) {
        arrayProductos.push(el)
        console.log(arrayProductos)
    }

    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))

    
}


export const generarCards = (array) => {
    console.log(array)
    array.forEach(element => {
        let { nombre, precio, id, img } = element
        sectionProductos.innerHTML += `

                        <div class="card">
                            <img src=.${img} alt="">
                            <h3>${nombre}</h3>
                            <span>$${precio}</span>
                            <button class="btn-agregar" data-id=${id}>Agregar al carrito</button>
                        </div>
        `
        eventoAgregarProducto()
    });
}

export const eventoAgregarProducto = (busqueda) => {
    let btns = document.querySelectorAll(".btn-agregar")
    console.log(busqueda)
    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            let id = event.target.attributes[1].value;
            console.log(id);

            let existe = arrayCarrito.findIndex(el => el.id == id)
            console.log(existe);
            if (existe != -1) {
                console.log("entre al if");
                let producto = arrayCarrito[existe]
                producto.sumarCantidad();
                console.log(arrayCarrito);
            } else {
                console.log("entre al else");
                let resultado = arrayProductos.find(el => el.id == id)
                console.log(resultado);
                console.log(resultado.nombre);
                let producto = new Producto(resultado.nombre, resultado.precio, resultado.img)
                arrayCarrito.push(producto);
                console.log(arrayCarrito);
            }
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        })
    }
}


export const eventoInput = () =>
    input.addEventListener("input", (event) => {
        sectionProductos.innerHTML = ""
        let resultado = arrayProductos.filter(el => el.nombre.toLowerCase().includes(event.target.value));
        console.log(resultado);
        if (resultado.length > 0) {
            generarCards(resultado)
        } else {
            sectionProductos.innerHTML = `<h3> No se encontró </h3>`
        }
    })


export const eventoCategoria = () => {
    for (const btn of btnsCategoria) {
        btn.addEventListener("click", (event) => {
            event.preventDefault()
            console.log(event.target.textContent);
            let categoria = event.target.textContent.toLowerCase()
            localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
            localStorage.setItem("categoria", categoria)
            window.location = "./pages/productos.html"
        })
    }

}