import React , { useState } from 'react'
import {DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { View, Text , Image } from 'react-native'

import { IMAGES } from '../../contains'
import styles from './styles'
import { DrawerItemComponent } from '../../components'

const DrawerContent = () => {
    const [active, setActive] = useState('Home')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Image style={styles.img} source={IMAGES.avatar} />
                </View>
                <Text style={styles.headerTitle}>ZendVN NEWS</Text>
            </View>
            <DrawerContentScrollView style={styles.body} >
               <DrawerItemComponent name={'Home'}   setActive={(value) => setActive(value)} active={active}/>
               <DrawerItemComponent name={'Gold'}   setActive={(value) => setActive(value)} active={active}/>
               <DrawerItemComponent name={'Coin'}   setActive={(value) => setActive(value)} active={active}/>
               <DrawerItemComponent name={'Setting'} setActive={(value) => setActive(value)} active={active}/>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Text style={styles.bottomDrawerSectionText}>@CopyRight ZendVN</Text>
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent
