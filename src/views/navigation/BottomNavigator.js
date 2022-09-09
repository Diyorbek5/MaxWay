import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.secondary,
        inactiveTintColor: COLORS.primary,
        labelStyle: { marginBottom: 6,fontSize: 9}
      }}
      initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let rn = route.name;

          if (rn === 'Home') {
            iconName = 'home';
            size = 25

          } else if (rn === 'My orders') {
            iconName = 'local-mall';
            size = 25

          } else if (rn === "Profile") {
            iconName = 'person';
            size = 25
          
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >

      <Tab.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
      <Tab.Screen options={{headerShown: false}} name='My orders' component={HomeScreen} />
      <Tab.Screen options={{headerShown: false}} name="Profile" component={HomeScreen} />

    </Tab.Navigator>
  );
};

export default BottomNavigator;
