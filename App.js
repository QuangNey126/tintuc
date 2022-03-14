import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens'
import { Provider } from 'react-redux'

import MyTabs from './navigation'
import SettingScreen from './navigation/SettingNavigation'
import store from './store'

const Drawer = createDrawerNavigator();

export default function App(props) {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown : false
          }} 
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="MyTabs"
          >
              <Drawer.Screen name="MyTabs" component={MyTabs} />
              <Drawer.Screen name="Setting" component={SettingScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
