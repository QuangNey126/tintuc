import React , { useEffect } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import { ProductColumn } from '../../components'
import { useRoute  } from '@react-navigation/native';
import { fetchAllArticleWithCategoryId } from '../../store/slices/article'

const CategoryScreen = () => {
    const route         = useRoute();
    const dispatch      = useDispatch()
    const articleData   = useSelector(state => state.Article.allItems)

    useEffect(() => {
        dispatch(fetchAllArticleWithCategoryId({id : route.params.categoryId}))
    }, [])

    const showProduct = ({item}) => {
        return (
            <ProductColumn data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={articleData}
                renderItem={showProduct}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default CategoryScreen
