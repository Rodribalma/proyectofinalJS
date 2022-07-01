function cargarProductos() {
  const lista = document.querySelector("#listado");
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((producto) => {
        const li = document.createElement("div");
        li.innerHTML = `
        <div class="col mb-4">
      <div class="card .h-100">
  <img  src="assets/img/productos/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <h5 class="card-title">${producto.id} - ${producto.nombre} </h5>
    <p class="card-text">$${producto.precio}</p>
    <a href="#" class="btn btn-primary" onclick = "agregar('${producto.id}','${producto.nombre}');
    return false;">Agregar</a>
  </div>
 </div>
</div>
      `;
        lista.append(li);
      });
    });
}

window.onload = function () {
  cargarProductos();
  mostrarCarrito();
};

function agregar(id, nombre) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: nombre + " agregado correctamente",
    showConfirmButton: false,
    timer: 1500,
  });

  const agregando = `<li class="list-group-item"> ${id} - ${nombre}</li>`;

  const carrito = localStorage.getItem("carrito");

  if (carrito == null) {
    localStorage.setItem("carrito", agregando);
  } else {
    localStorage.setItem("carrito", carrito + agregando);
  }

  mostrarCarrito();
}

function mostrarCarrito() {
  const carrito = localStorage.getItem("carrito");
  document.getElementById("carrito").innerHTML = carrito;
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  localStorage.clear("carrito");
  document.getElementById("carrito").innerHTML = "";

  Swal.fire({
    icon: "warning",
    position: "center",
    title: "vaciado correctamente",
    showConfirmButton: false,
    timer: 1500,
  });
}
