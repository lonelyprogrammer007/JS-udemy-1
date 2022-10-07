'use strict';

const API_KEY = "377810902087762628536x44305";

const countriesContainer = document.querySelector('.countries');
const btnWhereAmI = document.querySelector('.btn-country');

const renderCountry = (data, className = "") => {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.altSpellings[1]}</h3>
        <h4 class="country__region">${data.continents[0]}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const getCountryData = function (country) {
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        'Country not found'
    )
        .then(data => renderCountry(data[0]))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

const getCurrentPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const whereAmI = () => {
    getCurrentPosition()
        .then(position => {
            const { latitude: lat, longitude: lng } = position.coords;
            return getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`)
        })
        .then((data) => {
            console.log(data)
            console.log(`You are in ${data.city}, ${data.country}`)
            getCountryData(data.country)
        })
        .catch(error => { console.log(`Something went wrong 💥💥 ${error.message}. Try again!`) })
}

btnWhereAmI.addEventListener("click", whereAmI)