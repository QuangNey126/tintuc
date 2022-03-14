import axios from 'axios'

const baseURL = 'http://apiforlearning.zendvn.com/api'


export const api = {
    call : () => {
        return axios.create({
            baseURL
        })
    }
}
