import {axiosInstance} from "../utils/axiosInstance"

export const getUser = async () => {
    try{
        const response = await axiosInstance.get("/users"); // http://localHost3000/api/users
   
        return response.data.data
    } catch (error){
        return error.response
    }
}