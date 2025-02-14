import axios from './axios'

export const sendEmailContact = async (data) => axios.post(`/user/sendEmailSysoSout`, data)