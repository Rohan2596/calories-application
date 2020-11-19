/*
  @Purpose Api integration with frontend.
  @author Rohan Kadam
*/
module.exports = {
    apiUrl: "http://localhost:3001/calories",
    addUser:"/user/add",
    authUser:"/user/auth",
    getUser:"/user/detail/",
    forgotPassword:"/user/password/forgot",
    resetPassword:"/user/all",
    //meals
    addMeal:"/meal/add",
    editMeal:"/meal/edit/",
    deleteMeal:"/meal/remove/",
    getUserMeal:"/meal/all/"
}