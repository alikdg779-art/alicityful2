import cities from '../data/cities.json' assert { type: "json" };

export function getArea(city) {
    const c = cities[city.toLowerCase()];
    if (!c) throw new Error("Alan bilgisi yok");
    return c.area;
}
