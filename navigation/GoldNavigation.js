import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { GoldScreen } from '../screens'
import { IconHeader } from '../components'


const CoinStack = createStackNavigator();

const CoinStackScreen = (props) => {
    return (
      <CoinStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <CoinStack.Screen name="GoldScreen" component={GoldScreen} options={{
                                                                              title : 'Giá Vàng',
                                                                              headerLeft : () => (
                                                                                <IconHeader {...props} />
                                                                              )
                                                                            }}/>
    </CoinStack.Navigator>
    );
}


export default CoinStackScreen