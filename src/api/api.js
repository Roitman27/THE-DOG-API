import Axios from "axios";

const apiUrl = 'https://api.thedogapi.com/v1/breeds?limit=25&page=0&order=Desc&api_key=0dd5931e-dc53-4219-9bfb-51274aef6d80'

const api = Axios.create({
  baseURL: apiUrl
})

export default api