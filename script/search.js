console.log("JS conectado");

export let pokemonActual = null;

export function searchPokemon() {

    console.log("Función ejecutada"); 

    const nombre = document.getElementById("pokemonInput").value.toLowerCase();
    console.log("Nombre:", nombre); 

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            console.log("Datos recibidos:", data); 

            pokemonActual = {
                name: data.name,
                image: data.sprites.front_default
            };

            console.log("Pokemon guardado:", pokemonActual);

            const resultado = document.getElementById("resultado");

            resultado.textContent = "";

            const titulo = document.createElement("h2");
            titulo.textContent = data.name;

            const img = document.createElement("img");
            img.src = data.sprites.front_default;
            img.alt = data.name;

            resultado.appendChild(titulo);
            resultado.appendChild(img);
        })
        .catch(function(error) {
            console.log("Error:", error);
            alert("¡Error! Pokémon no encontrado");
        });
}