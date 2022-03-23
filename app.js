function getJson() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",

  };

  fetch("https://v1.nocodeapi.com/moy/mondaydotcom/mRJkwCpIgEEGuewM/columnValues", requestOptions)
    .then(response => response.json())
    .then(result => {
      var fecha = new Date();
      function formatoFecha(fecha) {
        function addCero(date) {
          if (date < 10) {
            return "0" + date;
          } else {
            return date;
          }
        }
        formato = fecha.getFullYear() +
          "-" + addCero(fecha.getMonth() + 1) +
          "-" + addCero(fecha.getDate()) +
          " " + addCero(fecha.getHours()) +
          ':' + addCero(fecha.getMinutes()) +
          ':' + addCero(fecha.getSeconds()) + " UTC";
        return formato;
      }
      var json = JSON.stringify(result, null, 2);
      var items = JSON.parse(json);
      
      var nombre = document.getElementById("nombre");
      var contacto = document.getElementById("contacto");
      var cronograma = document.getElementById("cronograma");
      var estado = document.getElementById("estado");
      var hrsEstimadas = document.getElementById("hrsEstimadas");
      var tarifa = document.getElementById("tarifa");
      var costo = document.getElementById("costo");
      var nota = document.getElementById("nota");
      var fecha = document.getElementById("fecha");

      const arr = items.data.boards.filter(d => d.name === "Análisis de mercado");

      console.log(items);

      nombre.textContent = arr[0].name;
      contacto.textContent = arr[0].column_values[1].text;
      cronograma.textContent = arr[0].column_values[2].text;
      estado.textContent = arr[0].column_values[5].text;
      hrsEstimadas.textContent = arr[0].column_values[6].text;
      tarifa.textContent = arr[0].column_values[8].text;
      costo.textContent = arr[0].column_values[9].text;
      nota.textContent = arr[0].column_values[10].text;
      fecha.textContent = arr[0].column_values[11].text;

    })
    .catch(error => console.log('error', error));
}