/*import productos from './store/productos';*/

const productos = [
  {
    titulo: "NikeBlack",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdab6dee0/products/NI_DC4068-001/NI_DC4068-001-1.JPG",
    precio: 180.25,
    categoria: "calzado",
    tallesXStock: [
      {
        talle: "s",
        stock: "2",
      },
    ],
  },
  {
    titulo: "NikePaste",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw35accab8/products/NI_DC4068-600/NI_DC4068-600-1.JPG",
    precio: 150.25,
    categoria: "calzado",
    tallesXStock: [
      {
        talle: "s",
        stock: "2",
      },
    ],
  },
  {
    titulo: "NikeBoy",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa20df339/products/NI_DJ3624-400/NI_DJ3624-400-1.JPG",
    precio: 350.25,
    categoria: "calzado",
    tallesXStock: [
      {
        talle: "s",
        stock: "2",
      },
    ],
  },
  {
    titulo: "NikePurple",
    img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw50afdaec/products/NI_DD1068-003/NI_DD1068-003-1.JPG?sw=400&sh=400",
    precio: 450.5,
    categoria: "calzado",
    tallesXStock: [
      {
        talle: "s",
        stock: "2",
      },
    ],
  },
  {
    titulo: "NikeAirBlue",
    img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw12ce1188/products/NI_CJ0575-100/NI_CJ0575-100-1.JPG?sw=400&sh=400",
    precio: 460.5,
    categoria: "calzado",
    tallesXStock: [
      {
        talle: "s",
        stock: "2",
      },
    ],
  },
];

function cargarProductos() {
  let cardDeck = document.getElementById("productos");
  productos.forEach((producto) => {
    cardDeck.innerHTML += `<div class="card">
        <img src="${producto.img}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>
        </div>
      </div>`;
  });
}

window.onload = function () {
  cargarProductos();
};
  const lista = document.querySelector("#listado");
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("div");
      li.innerHTML = `
      <div class="product" id="${producto.id}">
      <div class="img">
      <img class="imagen" src="assets/img/productos/${producto.imagen}">
    </div>
    <div class="title">${producto.nombre}</div>
    <div class="price">$${producto.precio}</div>
    <div class="code">Codigo: <span>${producto.id}</span></div>
    <button onclick = "agregar('${producto.id}','${producto.nombre}')">Agregar</button>
    </div>
    `;
      lista.append(li);
    });
  });

  function agregar(id,nombre){
    addEventListener("click", () => {
      Swal.fire ({
        position: "center",
        icon: "success",
        title: nombre+" agregado correctamente",
        showConfirmButton: false,
        timer: 1500,
      })
      });
      agregando= id+" "+nombre;

tipo = typeof(carrito)
if(tipo == "undefined"){
  carrito = agregando;
}else{
  carrito = carrito + "<br>" +agregando;
  localStorage.setItem("carrito",carrito)

}

mostrarCarrito()
  }

  function mostrarCarrito(){
    carrito = localStorage.getItem("carrito")
document.getElementById('carrito').innerHTML = carrito;
  }

  function vaciarCarrito(){ 
    localStorage.removeItem("carrito")
    localStorage.clear("carrito")
  document.getElementById('carrito').innerHTML = "";
  }