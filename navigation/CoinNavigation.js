import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { CoinScreen } from '../screens'
import { IconHeader } from '../components'

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = (props) => {
    return (
      <FavoriteStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <FavoriteStack.Screen name="CoinScreen" component={CoinScreen} options={{
                                                                              title : 'Giá Coin',
                                                                              headerLeft : () => (
                                                                                <IconHeader {...props} />
                                                                              )
                                                                            }}/>
    </FavoriteStack.Navigator>
    );
}


export default FavoriteStackScreen