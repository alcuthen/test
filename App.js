import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import { Home } from './src/pages/Home';
import { About } from './src/pages/About';
import { Third } from '.src/pages/Third';


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

        <Stack.Screen 
        name="Third" 
        component={ Third }/>
       
      </Stack.Navigator>
    </NavigationContainer>

  );
}



















