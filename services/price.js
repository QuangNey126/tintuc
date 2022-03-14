import { api } from '.'

const PriceService = {
    getGold() {
        return api.call().get(`/get-gold`)
    },
    getCoin() {
        return api.call().get(`/get-coin`)
    }
}

export default PriceService;