/** Esto es un ejemplo de como utilizar una promesa en javascript */
function getDataFromAPI() {
    return new Promise((resolve, reject) => {
      // Realizamos una llamada a una API
      fetch('https://rickandmortyapi.com/api/episode')
        .then((response) => {
          // Si la llamada tiene éxito, resolvemos la promesa con los datos obtenidos
          resolve(response.json());
        })
        .catch((error) => {
          // Si hay un error, rechazamos la promesa con el error
          reject(error);
        });
    });
  }
  
  // Llamamos a la función que devuelve una promesa
  getDataFromAPI()
    .then((data) => {
      // Si la promesa se resuelve correctamente, podemos hacer algo con los datos obtenidos
      console.log(data);
    })
    .catch((error) => {
      // Si la promesa es rechazada, podemos manejar el error de alguna manera
      console.error(error);
    });
  