const hasCity = (country,citys) => (city) => {
    return citys.some((el)=> el === city) ? `${city} is a city from ${country}` :
        `${city} is not a city from ${country}`
}

// console.log(hasCity("morocco",["oujda","nador","berkane"])("paris"));