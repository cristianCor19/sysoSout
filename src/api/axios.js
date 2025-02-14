import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://back-portfolio-psi.vercel.app', 
    withCredentials: true
})

export default instance