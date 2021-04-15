
import Axios from 'axios';

export const LoginUser = async (data: any) => {
    console.log(data)

    const loginUser = await Axios.post('http://localhost:5000/api/login', data)
    console.log(loginUser)
    return loginUser
    
}