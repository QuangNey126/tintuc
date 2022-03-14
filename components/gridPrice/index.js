import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { FormatPriceGold , FormatChangeCoin , FormatPriceCoin } from '../../help'

const GridPrice = ({data,coin}) => {

    let name    = coin ? data.name : data.type
    let buy     = coin ? FormatPriceCoin(data.price) : FormatPriceGold(data.buy)
    let sell    = coin ? FormatChangeCoin(data.percent_change_24h) : FormatPriceGold(data.sell)

    const layoutNumber = data.percent_change_24h < 0 ? styles.layoutTextDow : styles.layoutTextInCr

    return (
        <View style={styles.layoutChild}>
            <View style={styles.column}>
                <Text style={styles.layoutText}>{name}</Text>
            </View> 
            <View style={styles.column} >
                <Text style={styles.layoutText}>{buy}</Text>
            </View>
            <View style={styles.column} >
                <Text style={[styles.layoutText,layoutNumber]}>{sell}</Text>
            </View>
        </View>
    )
}

export default GridPrice
