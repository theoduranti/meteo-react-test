import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import About from "./components/About";
import Search from "./components/Search";
import { StatusBar } from 'expo-status-bar';

// import { TabNavigator } from "@react-navigation/native"
// import { TabNavigator } from "@react-navigation"

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Tabs = createBottomTabNavigator({
//   Search: { screen: Search },
//   About: { screen: About },
// })
const Tab = createBottomTabNavigator();

export default class App extends React.Component{
  render(){
    return(
        <View style={{flex: 1}}>

          <StatusBar hidden={true}/>
          <NavigationContainer onOverflow={"scroll"}>
            <Tab.Navigator 
                // screenOptions={({ route }) => ({
                //   tabBarActiveTintColor: 'tomato',
                //   tabBarInactiveTintColor: 'gray',
                //   tabBarActiveColor: 'tomato',
                //   pressColor: "black"
                // })}

                // tabBarOptions={{
                //   style: {
                //     backgroundColor: '#CE4418',
                //     paddingBottom: 3
                //   }
                // }}
                // tabBarOptions = {
                //   scrollEnabled=true,
                //   activeTintColor= '#e91e63',
                // }

                swipeEnabled = {true}
                scrollEnabled={true}
                shifting={true}

                tabBarOptions={{
                  activeTintColor: '#fff',
                  inactiveTintColor: 'lightgray',
                  activeBackgroundColor: '#c4461c',
                  inactiveBackgroundColor: 'white',
                      style: {
                            backgroundColor: '#CE4418',
                            paddingBottom: 3
                      }
                }}
              >
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
    )
  }
}
