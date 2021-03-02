import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import Signup from './components/Signup';
import MainScreen from './components/MainScreen';
// import PostScreen from './components/PostScreen';
 import MessageScreen from './components/MessageScreen';
import NotificationScreen from './components/NotificationScreen';
import ProfileSceen from './components/ProfileSceen';
import PostScreen from './components/PostScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default class App extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
         <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
          >
          <Tab.Screen
            name="Feed"
            component={MainScreen}
            options={{
              tabBarLabel: 'Feed',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={PostScreen}
            options={{
              tabBarLabel: 'Post',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileSceen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          </Tab.Navigator>
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Signup" component={Signup} />
             <Stack.Screen options ={{headerShown: false}} name="Main" component={MainScreen}/>
          </Stack.Navigator>
          </NavigationContainer>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
})