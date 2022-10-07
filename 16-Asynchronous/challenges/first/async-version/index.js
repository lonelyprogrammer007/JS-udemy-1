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

const renderError = (msg) => {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = async (url, errorMsg = 'Something went wrong') => {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);

        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(`Something went wrong 🤯🤯 ${error.message}`)
    }
};

const getCountryData = async (country) => {
    try {
        const data = await getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        renderCountry(data[0])
    } catch (error) {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        throw error;
    }
    countriesContainer.style.opacity = 1;
};

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const whereAmI = async () => {
    try {
        const dataGeo = await getCurrentPosition();
        const { latitude: lat, longitude: lng } = dataGeo.coords;
        const locationData = await getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`)
        getCountryData(locationData.country)
    } catch (error) {
        console.log(`Something went wrong 💥💥 ${error.message}. Try again!`)
        throw error;
    }
}

btnWhereAmI.addEventListener("click", whereAmI)