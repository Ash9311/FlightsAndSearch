const {City} = require('../models/index')
const {Op} = require('sequelize');
class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch(error){
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            //the below approach also works but will not return updated object. if we are using Pg then returning: true can be used
            // const city = await City.update(data,
            //     {where: {id:cityId}})
            // return city;

            const city = await City.findByPK(cityId);
            city.name = data.name;
            await city.save();
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw(error);
        }

    }

    async getCity(cityId){
        try {
            const city = await City.findByPK(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw(error);
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw(error);
        }
    }
}
module.exports = CityRepository;        