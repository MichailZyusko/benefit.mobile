import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/redux/store';
import ProfileScreen from './src/screens/profile';
import FavoriteScreen from './src/screens/favorite';
import CategoryScreen from './src/screens/categories';
import CartScreen from './src/screens/cart';
import { HomeScreenStackNavigator } from './src/screens/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/screens/intro';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// TODO: move to navigation folder
const Stack = createNativeStackNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'HomeScreenStackNavigator':
              return (
                <IoniconsIcon name={'home-outline'} size={25} color={color} />
              );
            case 'CategoryScreen':
              return (
                <IoniconsIcon name={'menu-outline'} size={35} color={color} />
              );
            case 'CartScreen':
              return (
                <IoniconsIcon name={'cart-outline'} size={32} color={color} />
              );
            case 'Избранное':
              return <AntDesignIcon name={'hearto'} size={30} color={color} />;
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
                <AntDesignIcon name={'hearto'} size={size} color={color} />
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
  );
};
const AppRoute = () => {
  const { hasCompletedIntro } = useSelector((state) => state.preferences);

  return (
    <Stack.Navigator>
      {!hasCompletedIntro && (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro"
          component={Intro}
        />
      )}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.TabBar}>
            <StatusBar />
            <NavigationContainer>
              <AppRoute />
            </NavigationContainer>
          </SafeAreaView>
        </PersistGate>
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
