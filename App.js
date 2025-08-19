import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {About} from './src/pages/About/About';
import {Home} from './src/pages/Home/Home';

export default function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Inicio",
          headerStyle: {
            backgroundColor: "#000",
            },
          headerTintColor: "#fff",
          //headerShown: false


        }}/>
        
        <Stack.Screen 
        name="About" 
        component={ About }/>
       
      </Stack.Navigator>
    </NavigationContainer>

  );
}



















