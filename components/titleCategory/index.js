import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const TitleCategory = ({title,categoryId}) => {
    const navigation = useNavigation()

    const changeCategory = () => {
        navigation.push('CategoryScreen',{
            name        : title,
            categoryId  : categoryId
        })
    }

    return (
        <TouchableOpacity onPress={changeCategory} style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TitleCategory
