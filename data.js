// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.allPokemon = {

  filterType: (data, condition) => {
  const filteredType = data.filter(element => {
    return element.type.indexOf(condition) > -1
  })
  return filteredType;
 }
}
