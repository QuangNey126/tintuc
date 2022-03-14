import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { HomeScreen , CategoryScreen , ProductScreen } from '../screens'
import { IconHeader } from '../components'

const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle : {
          backgroundColor : COLORS.primary
        },
        headerTintColor : COLORS.second
      }}
    >
        <HomeStack.Screen name="HomeScreen"     component={HomeScreen}    options={{
                                                                            title : 'Trang chủ',
                                                                            headerLeft : () => (
                                                                              <IconHeader {...props} />
                                                                            )
                                                                          }}/>
        <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={({route}) => ({title : route.params.name})}/>
        <HomeStack.Screen name="ProductScreen"  component={ProductScreen}  options={({route}) => ({title : route.params.name})}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen