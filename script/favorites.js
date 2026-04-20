function saveFavorite() {
    if (!pokemonActual) {                            //si no escribe o busca un pokemon
        alert("Primero busca un pokémon")
        return;
    }

    let texto = localStorage.getItem("favoritos");    // getIteam es leer algo, en este caso esta leyendo los favoritos
    let lista = JSON.parse(texto) || [];             //JSON.parse es convertir texto a un array/objeto

    let yaExiste = lista.find(function(p) {      // find es que recorre  la lista buscando el mismo nombre
    return p.nombre === pokemonActual.nombre;   // (p) es cada elemento de la lista y find es que recorre la lista buscando el mismno nombre
    });
    if (yaExiste) {
        alert("¡" + pokemonActual.nombre + "ya existe")
        return;
    }

    lista.push(pokemonActual)                                     // .push agrega el pokémon al array (lista)
    localStorage.setItem("favoritos", JSON.stringify(lista));     // JSON.stringify convierte el array a texto para guardarlo

    updateFavoritesList()

}