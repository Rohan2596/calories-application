const axios = require('axios');
const {apiUrl,addUser,authUser}=require('../constant');


class UserService {

    addUser = (userDTO) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${addUser}`,
            data: userDTO
        });
    };
    authUser=(authDto)=>{
        return axios({
            method: "POST",
            url: `${apiUrl}${authUser}`,
            data: authDto
        });
    }



}
module.exports=new UserService();