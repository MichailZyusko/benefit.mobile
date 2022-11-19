import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ProfileScreen from './src/screens/profile';
import FavoriteScreen from './src/screens/favorite';
import CategoryScreen from './src/screens/categories';
import CartScreen from './src/screens/cart';
import { HomeScreenStackNavigator } from './src/screens/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={styles.TabBar}>
          <StatusBar />
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  switch (route.name) {
                    case 'HomeScreenStackNavigator':
                      return (
                        <IoniconsIcon
                          name={'home-outline'}
                          size={25}
                          color={color}
                        />
                      );
                    case 'CategoryScreen':
                      return (
                        <IoniconsIcon
                          name={'menu-outline'}
                          size={35}
                          color={color}
                        />
                      );
                    case 'CartScreen':
                      return (
                        <IoniconsIcon
                          name={'cart-outline'}
                          size={32}
                          color={color}
                        />
                      );
                    case 'Избранное':
                      return (
                        <AntDesignIcon
                          name={'hearto'}
                          size={30}
                          color={color}
                        />
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
                headerShown: false,
                tabBarHideOnKeyboard: true,
              })}
            >
              <Tab.Screen
                name="HomeScreenStackNavigator"
                component={HomeScreenStackNavigator}
              />
              <Tab.Screen name="CategoryScreen" component={CategoryScreen} />
              <Tab.Screen name="CartScreen" component={CartScreen} />
              <Tab.Screen name="Избранное" component={FavoriteScreen} />
              <Tab.Screen name="Профиль" component={ProfileScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  TabBar: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
