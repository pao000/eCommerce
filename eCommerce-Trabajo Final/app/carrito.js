import { generarCards } from "./funciones.js";
const d = document;
const arrayCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(arrayCarrito)
const $carrito = d.getElementById('carrito');
let carritoLleno = [];
// console.log($carrito)
// console.log(arrayCarrito)


const productsCart = () => {
    arrayCarrito.forEach(product => {
        const { img, nombre, precio, id } = product;
        console.log(img)
        $carrito.innerHTML += `
<div class="card">
<img src=.${img} alt=${nombre}>
<h3>${nombre}</h3>
<span>$${precio}</span>
<button class="btn-agregar" data-id=${id}>Agregar al carrito</button>
</div>`
    })
}

productsCart()


const finalizarCompra = () => {
    const button = document.querySelector('.finalizar-compra');
    button.addEventListener('click', () => {

        Swal.fire({
            title: '¿Finalizar compra?',
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = '/index.html'
                localStorage.removeItem('carrito')
            }
        })
        // Swal.fire({
        //     title: '¿Finalizar compra?',
        //     showDenyButton: true,
        //     showCancelButton: true,
        //     confirmButtonText: 'Save',
        //     denyButtonText: `Don't save`,
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire('Saved!', '', 'success')
        //     } else if (result.isDenied) {
        //         Swal.fire('Changes are not saved', '', 'info')
        //     }
        // })

    })
}




finalizarCompra()

const total = () => {
    const $total = document.querySelector('.total');
    const subtotal = arrayCarrito.reduce((acc, item) => item.precio + acc, 0)
    localStorage.setItem('total', subtotal)

    const newTotal = localStorage.getItem('total');

    $total.innerHTML = `<h1>Total $${newTotal}</h1 > `


}

total()


const quantity = () => {
    const $quantity = document.querySelector('.quantity')
    const cantidad = JSON.parse(localStorage.getItem('carrito'));

    $quantity.innerHTML = `${cantidad.length} `
    console.log(cantidad.length)
}

quantity()
