import Axios from "axios";


export const addUser = async (data: any) => {
    
    const postUser = await Axios.post('http://127.0.0.1:5000/signup', data)
   return postUser.status
}