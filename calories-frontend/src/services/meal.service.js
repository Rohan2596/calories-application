const axios = require('axios');
const {apiUrl,addMeal,getUserMeal}=require('../constant');

class MealService {

    addMeal = (mealDTO) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${addMeal}`+'/'+localStorage.getItem('userId'),
            data: mealDTO
        });
    };
    getAllUserMeal=()=>{
        return axios({
            method:"GET",
            url:`${apiUrl}${getUserMeal}`+localStorage.getItem('userId'),
            
        })
    }
    
    



}
module.exports=new MealService();