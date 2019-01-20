const data = window.POKEMON.pokemon;
const containerRoot = document.getElementById('root');
const selectType = document.getElementById('pokeType');
const selectOrder = document.getElementById('orderBy');

//función que muestra
const showData = (POKEMON) => {
  let result = '';
  const dataPoke = POKEMON.pokemon;
  dataPoke.forEach(element => {
    result = containerRoot.innerHTML += `
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
  });
  return result;
}

//función que 
selectType.addEventListener('change', () => {
  let condition = selectType.value;
  let filtered = window.allPokemon.filterType(data, condition);
  // limpio div
  containerRoot.innerHTML = '';
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

//ordenar por

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
