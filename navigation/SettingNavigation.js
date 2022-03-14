import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import { IconHeader } from '../components'
import { SettingScreen } from '../screens'

const SettingStack = createStackNavigator();

const SettingStackScreen = (props) => {

    return (
      <SettingStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <SettingStack.Screen name="SettingScreen" component={SettingScreen} options={{
                                                                              title : 'Cài đặt',
                                                                              headerLeft : () => (
                                                                                <IconHeader {...props} />
                                                                              )
                                                                            }}/>
    </SettingStack.Navigator>
    );
}


export default SettingStackScreen