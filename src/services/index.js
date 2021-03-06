import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2'
})

export const api = {
  get (url) {
    return axiosInstance.get(url)
  }
}
