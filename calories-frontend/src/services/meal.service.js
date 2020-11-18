const axios = require('axios');
const {apiUrl,addMeal,getUserMeal,deleteMeal,editMeal}=require('../constant');

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
    editMeal=(editMealDto,mealId)=>{
        return axios({
            method:"PUT",
            url:`${apiUrl}${editMeal}`+localStorage.getItem('userId')+'/'+mealId,
            data:editMealDto
        })
    }
    deleteUserMeal=(mealId)=>{
        return axios({
            method:"DELETE",
            url:`${apiUrl}${deleteMeal}`+localStorage.getItem('userId')+'/'+mealId
        })
    }
    
    



}
module.exports=new MealService();