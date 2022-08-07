import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ProfileScreen from './src/screens/profile';
import FavoriteScreen from './src/screens/favorite';
import CategoriesScreen from './src/screens/categories';
import CartScreen from './src/screens/cart';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.TabBar}>
        <StatusBar />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                switch (route.name) {
                  case 'Главная':
                    return (
                      <IoniconsIcon
                        name={'home-outline'}
                        size={30}
                        color={color}
                      />
                    );
                  case 'Категории':
                    return (
                      <IoniconsIcon
                        name={'menu-outline'}
                        size={45}
                        color={color}
                      />
                    );
                  case 'Корзина':
                    return (
                      <IoniconsIcon
                        name={'cart-outline'}
                        size={32}
                        color={color}
                      />
                    );
                  case 'Избранное':
                    return (
                      <AntDesignIcon name={'hearto'} size={30} color={color} />
                    );
                  case 'Профиль':
                    return (
                      <IoniconsIcon
                        name={'person-circle-outline'}
                        size={35}
                        color={color}
                      />
                    );
                  default:
                    return (
                      <AntDesignIcon
                        name={'hearto'}
                        size={size}
                        color={color}
                      />
                    );
                }
              },
              tabBarActiveTintColor: '#D692FF',
              tabBarInactiveTintColor: '#000000',
              tabBarShowLabel: false,
            })}>
            <Tab.Screen name="Главная" component={HomeScreen} />
            <Tab.Screen name="Категории" component={CategoriesScreen} />
            <Tab.Screen name="Корзина" component={CartScreen} />
            <Tab.Screen name="Избранное" component={FavoriteScreen} />
            <Tab.Screen name="Профиль" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  TabBar: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
