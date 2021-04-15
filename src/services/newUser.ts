import Axios from "axios";


export const addUser = async (data: any) => {
      console.log("postUser.status")

    const postUser = await Axios.post('http://127.0.0.1:5000/api/signup', data)
         console.log(postUser.status)

    return postUser.status
}


