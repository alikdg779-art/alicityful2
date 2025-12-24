import { getPlate } from './services/plate.js';
import { getPopulation } from './services/population.js';
import { getArea } from './services/area.js';

const input = document.getElementById("cityInput");
const btn = document.getElementById("showBtn");
const box = document.getElementById("resultBox");

if (localStorage.getItem("lastCity")) {
    input.value = localStorage.getItem("lastCity");
    showInfo(input.value);
}

btn.onclick = () => {
    if (!input.value) return;
    showInfo(input.value);
};

function showInfo(city) {
    try {
        const plate = getPlate(city);
        const pop = getPopulation(city);
        const area = getArea(city);

        box.innerHTML = `
            <b>${city}</b><br>
            Plaka: ${plate}<br>
            Nüfus: ${pop}<br>
            Alan: ${area} km²
        `;

        localStorage.setItem("lastCity", city);
    } catch (e) {
        box.innerHTML = e.message;
    }
}
