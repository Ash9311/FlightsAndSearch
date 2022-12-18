const {CityRepository} = require('../repository/index')

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
        }
    }

    async deleteCity(cityId){
        try {
            const reponse = await this.cityRepository.deleteCity(cityId);
            return reponse;
        } catch (error) {
            console.log("something went wrong at service layer");
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
        }
    }

    async getAllCities(){
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities; 
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;