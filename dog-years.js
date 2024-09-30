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

const dogYears = (planet, seconds) => {
    let year = planets[planet]*31557600
    return parseFloat(((seconds/year)*7).toFixed(2))
}
// console.log(dogYears('mercury', 2134835688))
// console.log(dogYears("earth",1000000000))
// console.log(1*60*60*24*365.21)