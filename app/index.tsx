import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountScreen from '../screens/AccountScreen';
import Panier from '@/screens/Panier';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Acceuil') {
              // iconName = 'home';
              iconName = 'roofing';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Panier') {
              iconName = 'shopping-basket';
              size = 45;
            } else if (route.name === 'Compte') {
              iconName = 'account-circle';
            } else if (route.name === 'Commandes') {
              iconName = 'receipt-long';
            }

            return <MaterialIcons name={iconName || 'home'} size={30} color={color} />;
          },
          headerShown: false  // Cache l'en-tête sur tous les écrans
        })}
      >
        <Tab.Screen name="Acceuil" component={HomeScreen}  />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name='Panier' component={Panier}/>
        <Tab.Screen name="Commandes" component={OrdersScreen} />
        <Tab.Screen name="Compte" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
