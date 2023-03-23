/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

const cars = [
    {
        brand: 'audi',
        model: 'Q5',
        fuel: 'diesel'
    },
    {
        brand: 'audi',
        model: 'a1',
        fuel: 'benzine'
    },
    {
        brand: 'audi',
        model: 'a3',
        fuel: 'diesel'
    },
    {
        brand: 'ford',
        model: 'mustang',
        fuel: 'benzine'
    },
    {
        brand: 'jeep',
        model: 'renegade',
        fuel: 'diesel'
    },
    {
        brand: 'seat',
        model: 'leon',
        fuel: 'diesel'
    },
    {
        brand: 'volkswagen',
        model: 't-cross',
        fuel: 'gpl'
    },
    {
        brand: 'volkswagen',
        model: 'up',
        fuel: 'metano'
    },
    {
        brand: 'opel',
        model: 'mokka',
        fuel: 'benzine'
    },
    {
        brand: 'fiat',
        model: 'panda',
        fuel: 'electric'
    }
]

const benzineCars = cars.filter((car) => {
    if (car.fuel == 'benzine') {
        return true
    }
})
console.log(benzineCars)

const dieselCars = cars.filter((car) => {
    if (car.fuel == 'diesel') {
        return true
    }
})

console.log(dieselCars)

othersCars = cars.filter((car) => {
    if (car.fuel != 'diesel' && car.fuel != 'benzine') {
        return true
    }
})

console.log(othersCars)