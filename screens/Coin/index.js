import React , { useEffect } from 'react'
import { View , Text, FlatList } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import { GridPrice } from '../../components'
import { fetchPriceCoin } from '../../store/slices/price'


const CoinScreen = () => {
    const dispatch  = useDispatch()
    const priceCoin = useSelector(state => state.Price.coin)

    useEffect(() => {
        dispatch(fetchPriceCoin())
    }, [])

    const showCoin =({item}) => {
        return (
            <GridPrice data={item} coin/>
        )
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={styles.layoutTitle}>
                        <View style={styles.column}>
                            <Text style={styles.layoutTextHeader}>Name</Text>
                        </View> 
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Price(USD)</Text>
                        </View>
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Change24(%)</Text>
                        </View>
                    </View>
                    {
                        priceCoin.length !== 0 && (
                            <FlatList 
                                data={priceCoin}
                                renderItem={showCoin}
                                keyExtractor={item => item.id.toString()}
                            />
                        )
                    }
                </View>
            </View>
        </>
    )
}

export default CoinScreen
