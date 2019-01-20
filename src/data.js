// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.allPokemon = {

  filterType: (data, condition) => {
    const filteredType = data.filter(element => {
      return element.type.indexOf(condition) > -1
    })
    return filteredType;
  },


  sortData: (data, sortBy) => {
    // console.log(data, sortOrder); 

    if (sortBy == 'a-z') {

      return data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }

    if (sortBy == 'z-a') {
      return data.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
  },

  computeStats: (filtered) => {
    return filtered.length;
  }
}


/* 
  users.sort(function(a, b){
    if(a.firstname < b.firstname) { return -1; }
    if(a.firstname > b.firstname) { return 1; }
    return 0;
})

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice c
on respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, 
indica si se quiere ordenar de manera ascendente o descendente. */
