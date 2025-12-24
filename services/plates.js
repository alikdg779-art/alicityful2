import cities from '../data/cities.json' assert { type: "json" };

export function getPlate(city) {
    const c = cities[city.toLowerCase()];
    if (!c) throw new Error("Plaka bulunamadı");
    return c.plate;
}
