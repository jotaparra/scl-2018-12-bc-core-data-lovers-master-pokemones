document.addEventListener('DOMContentLoaded', function () {
  window.M.AutoInit();
});

const data = window.POKEMON.pokemon;
const data2 = window.POKEMON;
const containerRoot = document.getElementById('root');
const selectType = document.getElementById('pokeType');
const selectOrder = document.getElementById('orderBy');

//función que muestra
const showData = (data2) => {
  let result = '';
  const dataPoke = data2.pokemon;
  dataPoke.forEach(element => {
    result = containerRoot.innerHTML += `
          <div class="col s3 card small card-panel">
          <div class="card-image waves-effect waves-block waves-light">
          <div class="caja-pokemon">
            <img class="activator responsive-img" src="${element.img}">
          </div>
          </div>
          <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${element.name}<i class="material-icons right">add</i></span>
          <p><a href="#">${element.type}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${element.name}<i class="material-icons right">close</i></span>
            <p class="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>`
  });
  return result;
}

//función que filtra
selectType.addEventListener('change', () => {
  let condition = selectType.value;
  let filtered = window.allPokemon.filterType(data, condition);
  let countType = window.allPokemon.computeStats(filtered);
  // limpio div
  containerRoot.innerHTML = '';
  containerRoot.innerHTML = `<p>Los pokemones tipo ${condition} son: ${countType} <p/>`;
  filtered.forEach(element => {
    containerRoot.innerHTML += `
    <div>
        <div class="card">
          <div class="box">
            <h2>${element.name}</h2>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h3>${element.type}</h3>
          </div>
        </div>
      </div>`
  })
});

window.onload = showData(POKEMON);

//función que ordena

selectOrder.addEventListener('change', () => {
  let sortBy = selectOrder.value;
  let ordered = window.allPokemon.sortData(data, sortBy);
  containerRoot.innerHTML = '';
  ordered.forEach(element => {
    containerRoot.innerHTML += `
    <div>
        <div class="card">
          <div class="box">
            <h2>${element.name}</h2>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h3>${element.type}</h3>
          </div>
        </div>
      </div>`
  })
})

//Calcula el total de pokemones del tipo seleccionado







/*document.getElementById('sort').addEventListener('change', (evento) => {
  evento.preventDefault();

  //Creo una nueva constante "s   eleccionOrden" donde tomo el valor seleccionado en Select
  const sorted = document.getElementById('sort').value
  //variable que  guarda todos los return de "ordenarPokemons" de la data.js
  let ver = sortData(data, sorted)

  //Se borra lo impreso cada vez que vuelvo a seleccionar otro ordenador, debe ser antes del que se imprime en la pantalla
  document.getElementById("root").innerHTML = " ";

  //se recorre la variable "ver" con todos los datos de "ordenado"
  for (let i = 0; i < ver.length; i++) {

      //Se imprime en el id=vacío, la variable ver siendo recorrida. Muestro solo el nombre    
      document.getElementById("root").innerHTML +=
          `<div>
          <div class="card">
          <div class="box">
              <div class="img">
                  <img src="${ver[i].img}">
              </div>
              <h3>${ver[i].num}</h3>
              <h2>${ver[i].name}</h2>
              <p>${ver[i].type}</p>
          </div>
          </div>
          </div> `

  }
*/
