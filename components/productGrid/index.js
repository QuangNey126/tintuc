import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import Icon from '../Icon'
import { CustomDate } from '../../help'

const ProductGrid = ({data}) => {

    const navigation    = useNavigation();

    const onArticle = () => {
        navigation.push('ProductScreen',{
            name    : data.title,
            id      : data.id,
            thumb   : data.thumb,
            link    : data.link
        })
    }

    return (
        <TouchableOpacity onPress={onArticle} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.img} source={{uri : data.thumb}} />
                </View>
                <View style={styles.boxContent}>
                    <Text numberOfLines={2} style={styles.title}>{ data.title }</Text>
                    <View style={styles.time}>
                        <Icon />
                        <Text style={styles.timeText}>{ CustomDate(data.publish_date) }</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductGrid
