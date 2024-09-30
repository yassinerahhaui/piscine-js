const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

const dogYears = (planet, seconds) => parseFloat((seconds * (planets[planet] / (1 * 60 * 60 * 24 * 365.25)) * 7).toFixed(2))

console.log(dogYears("earth", 1000000000))