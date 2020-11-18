const axios = require('axios');
const {apiUrl,addMeal}=require('../constant');

class MealService {

    addMeal = (mealDTO) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${addMeal}`+'/'+localStorage.getItem('userId'),
            data: mealDTO
        });
    };
    
    



}
module.exports=new MealService();