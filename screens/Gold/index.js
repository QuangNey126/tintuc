import React , { useEffect } from 'react'
import { View , Text, FlatList } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import { GridPrice } from '../../components'
import { fetchPriceGold } from '../../store/slices/price'

const GoldScreen = () => {
    const dispatch  = useDispatch()
    const priceGold = useSelector(state => state.Price.gold)

    useEffect(() => {
        dispatch(fetchPriceGold())
    }, [])

    const showGold =({item}) => {
        return (
            <GridPrice data={item}/>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={styles.layoutTitle}>
                        <View style={styles.column}>
                            <Text style={styles.layoutTextHeader}>Loại vàng</Text>
                        </View> 
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Mua vào</Text>
                        </View>
                        <View style={styles.column} >
                            <Text style={styles.layoutTextHeader}>Bán ra</Text>
                        </View>
                    </View>
                    {
                        priceGold.length !== 0 && (
                            <FlatList 
                                data={priceGold}
                                renderItem={showGold}
                                keyExtractor={item => item.type.toString()}
                            />
                        )
                    }
                </View>
                
                
            </View>
        </>
    )
}

export default GoldScreen
