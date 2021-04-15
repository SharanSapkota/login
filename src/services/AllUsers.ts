import Axios from 'axios'
import token from '../ApiHeader'
import { createContext } from 'react'



const getAllUsers = async () => {
 
    const getUsers = await Axios.get('http://localhost:5000/api/users', token)
    // console.log(getUsers.data.getUsers)
    return getUsers.data
}

export default getAllUsers;
