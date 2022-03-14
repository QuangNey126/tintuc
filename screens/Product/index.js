import React from 'react'
import { View , Image  } from 'react-native'
import { WebView } from 'react-native-webview';

import styles from './styles'
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {

    const route = useRoute()
    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image style={styles.img} source={{uri : route.params.thumb}} />
            </View>
            <View style={styles.boxContent}>
                <View style={styles.content}>
                    <WebView source={{ uri: route.params.link }} />
                </View>
            </View>
        </View>
    )
}

export default ProductScreen
