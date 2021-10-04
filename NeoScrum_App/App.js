import React, { Component } from 'react';
import LoginScreen from './components/pages/loginscreen';
import SignInScreen from './components/pages/signupscreen';
import Home from './components/pages/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={LoginScreen} name="LoginScreen" options={{headerShown:false}}/>
          <Stack.Screen component={SignInScreen} name="SignInScreen" options={{headerShown:false}}/>
          <Stack.Screen component={Home} name="Home"/>
        </Stack.Navigator>
      </NavigationContainer>
      
      
        
    );
  }
}

export default App;
