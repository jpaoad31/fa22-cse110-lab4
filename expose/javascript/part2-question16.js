let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
// Solution: 
for (let name in statistics) {
    if (name == 'r') {
        console.log(statistics[name]);
    } else if (statistics[name] % 2) {
        console.log(statistics[name]);
    }
}