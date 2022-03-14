import { api } from '.'

const ArticleService = {
    list({
        id = 1,
        limit = 40,
        ...restParam
    } = {}) {
        return api.call().get(`/categories_news/${id}/articles`,{
            params : {
                id,
                limit,
                ...restParam
            }
        })
    }
}

export default ArticleService;