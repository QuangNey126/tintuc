import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/category'
import articleReducer from './slices/article'
import SettingSliceReducer from './slices/setting'
import priceReducer from './slices/price'

const store = configureStore({
    reducer: {
        Category    : categoryReducer,
        Article     : articleReducer,
        Setting     : SettingSliceReducer,
        Price       : priceReducer,
    },
})

export default store

