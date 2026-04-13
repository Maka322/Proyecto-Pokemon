function updateFavoritesList() {
  let favoritos = localStorage.getItem("favoritos");
  favoritos = favoritos ? JSON.parse(favoritos) : [];

  let contenedor = document.getElementById("favoritos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  favoritos.forEach(pokemon => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = pokemon.imagen;
    img.style.width = "100px";

    let nombre = document.createElement("p");
    nombre.textContent = pokemon.nombre;

    div.appendChild(img);
    div.appendChild(nombre);

    contenedor.appendChild(div);
  });
}

export{updateFavoritesList}