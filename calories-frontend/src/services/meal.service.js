const axios = require('axios');
const {apiUrl,addMeal,getUserMeal,deleteMeal}=require('../constant');

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
    };
    deleteUserMeal=(mealId)=>{
        return axios({
            method:"DELETE",
            url:`${apiUrl}${deleteMeal}`+localStorage.getItem('userId')+'/'+mealId
        })
    }
    
    



}
module.exports=new MealService();