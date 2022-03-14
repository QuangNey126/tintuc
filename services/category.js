import { api } from '.'

const CategoryService = {
    list({
        offset = 0,
        limit = 10,
        ...restParam
    } = {}) {
        return api.call().get('/categories_news',{
            params : {
                offset,
                limit,
                ...restParam
            }
        })
    }
}

export default CategoryService;
