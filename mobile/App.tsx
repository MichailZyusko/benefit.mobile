import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home';
import SettingsScreen from './src/screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.TabBar}>
        <StatusBar />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName = '';

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'gears' : 'gears';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#ff0000',
              tabBarInactiveTintColor: '#000000',
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  TabBar: {
    flex: 1,
    backgroundColor: '#212121',
  },
});

export default App;
