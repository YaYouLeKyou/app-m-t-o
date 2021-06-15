const APIKEY = '59458aa1a61037f357831a96ccd97f12';

//appel a l' api openweather avec ville en paramètre de fonction
let apiCall = function (city) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${APIKEY}&units=metric`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          '<i class="fas fa-temperature-low"></i>' + data.main.temp + ' °';
        document.querySelector('#humidity').innerHTML =
          '<i class="fas fa-tint"></i></i>' + data.main.humidity + ' %';
        document.querySelector('#wind').innerHTML =
          '<i class="fas fa-wind"></i>' + data.wind.speed + ' km/h';
        document.querySelector('#weather').innerHTML =
          data.weather[0].description;
      })
    )
    .catch((err) => console.log('Erreur : ' + err));
};

//écouteur d' événement sur la soumission du formulaire

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});

//appel par défaut au chargement de la page
apiCall('Paris');
