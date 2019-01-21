document.addEventListener('DOMContentLoaded', function () {
  window.M.AutoInit();
});

const data = window.POKEMON.pokemon;
const containerRoot = document.getElementById('root');
const selectType = document.getElementById('pokeType');
const selectOrder = document.getElementById('orderBy');

//función que muestra
const showData = (data) => {
  let result = '';
  const dataPoke = data.pokemon;
  dataPoke.forEach(element => {
    result = containerRoot.innerHTML += 
    `
          <div class="col m3 card small hoverable">
          <div class="card-image waves-effect waves-block waves-light">  
            <img class="activator responsive-img caja-pokemon" src="${element.img}">
          </div>
          <div class="card-content">
          <p>N° ${element.num}</p>
          <span class="card-title activator grey-text text-darken-4"><span class="bold">${element.name}</span><i class="material-icons right">add</i></span>
          <p>${element.type[0]} ${element.type[1]}</p>
          </div>
          <div class="card-reveal deep-purple lighten-5">
            <span class="card-title grey-text text-darken-4">${element.name}<i class="material-icons right">close</i></span>
            <p><span class="bold">Altura:</span> ${element.height}</p>
            <p><span class="bold">Peso:</span> ${element.weight}</p>
            <p><span class="bold">Debilidades:</span> ${element.weaknesses}</p>
            <p><span class="bold">Huevo:</span> ${element.egg}</p>
            <a href="http://www.morningkids.net/pokemon/${element.id}-es-pokemon.php" target="_blank">Imagen para colorear</a>
          </div>
        </div>`
  });
  return result;
}
window.onload = showData(POKEMON);

//función que filtra
selectType.addEventListener('change', () => {
  let condition = selectType.value;
  let filtered = window.allPokemon.filterType(data, condition);
  let countType = window.allPokemon.computeStats(filtered);
  // limpio div
  containerRoot.innerHTML = '';
  containerRoot.innerHTML = `<h5>Los pokemones tipo ${condition} son: ${countType} </h5>`;
  filtered.forEach(element => {
    containerRoot.innerHTML += `
    <div class="col m3 card small hoverable">
    <div class="card-image waves-effect waves-block waves-light">  
      <img class="activator responsive-img caja-pokemon" src="${element.img}">
    </div>
    <div class="card-content">
    <p>N° ${element.num}</p>
    <span class="card-title activator grey-text text-darken-4"><span class="bold">${element.name}</span><i class="material-icons right">add</i></span>
    <p>${element.type[0]} ${element.type[1]}</p>
    </div>
    <div class="card-reveal deep-purple lighten-5">
      <span class="card-title grey-text text-darken-4">${element.name}<i class="material-icons right">close</i></span>
      <p><span class="bold">Altura:</span> ${element.height}</p>
      <p><span class="bold">Peso:</span> ${element.weight}</p>
      <p><span class="bold">Debilidades:</span> ${element.weaknesses}</p>
      <p><span class="bold">Huevo:</span> ${element.egg}</p>
    </div>
  </div>`
  })
});



//función que ordena

selectOrder.addEventListener('change', () => {
  let sortBy = selectOrder.value;
  let ordered = window.allPokemon.sortData(data, sortBy);
  containerRoot.innerHTML = '';
  ordered.forEach(element => {
    containerRoot.innerHTML += `
    <div class="col m3 card small hoverable">
    <div class="card-image waves-effect waves-block waves-light">  
      <img class="activator responsive-img caja-pokemon" src="${element.img}">
    </div>
    <div class="card-content">
    <p>N° ${element.num}</p>
    <span class="card-title activator grey-text text-darken-4"><span class="bold">${element.name}</span><i class="material-icons right">add</i></span>
    <p>${element.type[0]} ${element.type[1]}</p>
    </div>
    <div class="card-reveal deep-purple lighten-5">
      <span class="card-title grey-text text-darken-4">${element.name}<i class="material-icons right">close</i></span>
      <p><span class="bold">Altura:</span> ${element.height}</p>
      <p><span class="bold">Peso:</span> ${element.weight}</p>
      <p><span class="bold">Debilidades:</span> ${element.weaknesses}</p>
      <p><span class="bold">Huevo:</span> ${element.egg}</p>
    </div>
  </div>`
  })
})
