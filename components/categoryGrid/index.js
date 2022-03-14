import React , { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import ProductGrid from '../productGrid'
import { fetchArticleWithCategoryId } from '../../store/slices/article'
import { useNavigation } from '@react-navigation/native'
import TitleCategory from '../titleCategory'


const CategoryGrid = ({title,categoryId}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const articleData = useSelector(state => state.Article.items)

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
                        <View style={styles.boxProduct}>
                            <ProductGrid data={articleInCategory[0]}/>
                            <ProductGrid data={articleInCategory[1]}/>
                        </View>
                        <View style={styles.boxProduct}>
                            <ProductGrid data={articleInCategory[2]}/>
                            <ProductGrid data={articleInCategory[3]}/>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default CategoryGrid
