import axios from 'axios'

const BASE_URL = 'https://api.mercadolibre.com/'

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})