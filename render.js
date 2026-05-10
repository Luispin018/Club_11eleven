const contenedor = document.querySelector(".products");

if (!contenedor) {
  console.error("❌ No se encontró el contenedor .products");
}

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="card">

      ${p.nuevo ? '<span class="badge">NOVEDAD</span>' : ''}

      <div class="card-image">
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>

      <div class="brand">${p.marca}</div>
      <div class="name">${p.nombre}</div>
      <div class="price">${p.precio}</div>

      <a href="https://ig.me/m/club_11eleven" class="btn" target="_blank">
        Haz tu pedido
      </a>

    </div>
  `;
});
