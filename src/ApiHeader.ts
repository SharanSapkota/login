

const getToken = localStorage.getItem('token')
const token = { "headers": { "authorization": getToken } }

export default token