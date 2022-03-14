import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import ArticleService from '../../services/article'

export const fetchArticleWithCategoryId = createAsyncThunk(
    'article/fetchArticleWithCategoryId',
    async (data, thunkAPI) => {
      const response = await ArticleService.list(data)
      return response.data
    }
)

export const fetchAllArticleWithCategoryId = createAsyncThunk(
    'article/fetchAllArticleWithCategoryId',
    async (data, thunkAPI) => {
      const response = await ArticleService.list(data)
      return response.data
    }
)

const articleSlice = createSlice({
    name : 'article',
    initialState : {
        items     : [],
        allItems  : []
    },
    reducers : {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchArticleWithCategoryId.fulfilled, (state, action) => {
                state.items = [...action.payload,...state.items]
            })
            .addCase(fetchArticleWithCategoryId.rejected, (state, action) => {
                console.log(action.error.message);
            })
            .addCase(fetchAllArticleWithCategoryId.fulfilled, (state, action) => {
                state.allItems = action.payload
            })
            .addCase(fetchAllArticleWithCategoryId.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const {} = articleSlice.actions
export default articleSlice.reducer


