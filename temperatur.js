export const temperatur = {
    temperaturBase: 10, 

    toFahrenheit() {
        return this.temperaturBase * 9 / 5 + 32;
    },
    toKelvin() {
        return this.temperaturBase + 273.15;
    }
        
};
