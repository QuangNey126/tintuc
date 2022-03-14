import React , { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import ProductColumn from '../productColumn'
import { fetchArticleWithCategoryId } from '../../store/slices/article'
import { useNavigation } from '@react-navigation/native'
import TitleCategory from '../titleCategory'

const CategoryColumn = ({title,categoryId}) => {
    const navigation    = useNavigation()
    const dispatch      = useDispatch()
    const articleData   = useSelector(state => state.Article.items)

    useEffect(() => {
        dispatch(fetchArticleWithCategoryId({id : categoryId , limit : 4}))
    }, [])

    const articleInCategory = articleData.filter((item) => item.category_id == categoryId)

    return (
        <View style={styles.container}>
            <TitleCategory  title={title} categoryId={categoryId}/>
            {
                articleInCategory.length !== 0 && (
                <View style={styles.box}>
                    <ProductColumn data={articleInCategory[0]}/>
                    <ProductColumn data={articleInCategory[1]}/>
                </View>
                )
            }
        </View>
    )
}

export default CategoryColumn
