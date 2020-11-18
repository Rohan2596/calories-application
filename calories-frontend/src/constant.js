module.exports = {
    apiUrl: "http://localhost:3001/calories",
    addUser:"/user/add",
    authUser:"/user/auth",
    getUser:"",
    forgotPassword:"",
    resetPassword:"",
    //meals
    addMeal:"/meal/add",
    editMeal:"/meal/edit/:userId/:id",
    deleteMeal:"/meal/remove/:userId/:id",
    getUserMeal:"/meal/all/"
}