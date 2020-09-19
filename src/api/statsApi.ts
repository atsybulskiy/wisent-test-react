import axios from 'axios'

const url = 'http://localhost:3000/stats'

export const getStats = () => {
    return axios.get(`${url}`)
}
