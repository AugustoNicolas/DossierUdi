import axios from "axios"

//recibe un usuario y si no existe lo agrega a la DB... pero de igual manera lo recibe xd
export const getUser = async (user) =>{
    try{
        const resp = await axios.post("http://localhost:8002/usuario/getC", user)
        return resp
    } catch(error){
        return error
    }
}