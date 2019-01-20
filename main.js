const data = window.POKEMON.pokemon;
const containerRoot = document.getElementById('root');
const selectType = document.getElementById('pokeType');


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


  selectType.addEventListener('change', () => {
  let condition = selectType.options[selectType.selectedIndex].value;
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