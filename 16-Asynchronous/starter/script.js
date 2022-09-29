'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Our First AJAX Call: XMLHttpRequest

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings[1]}</h3>
      <h4 class="country__region">${data.continents[0]}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data, 'neighbour');

      const [neighbour] = data.borders;

      if (!neighbour) return;
    });
  });
};

getCountryDataAndNeighbour('colombia');
