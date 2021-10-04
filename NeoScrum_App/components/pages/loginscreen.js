import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {KeyboardAvoidingView, Platform, TouchableWithoutFeedback,Keyboard,StyleSheet,Text,
    TextInput,TouchableOpacity,View} from 'react-native';


class LoginScreen extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.innerloginContainer} >
            
                        <Text style={styles.companyLogoLeft}>Neo
                            <Text style={styles.companyLogoRight}>Scrum</Text>
                        </Text>
                        <Text style={styles.loginDisplay}>Login</Text>

                        <View style={styles.inputTextView}>
                            <Text>Username</Text>
                            <TextInput placeholder={"test@gmail.com"}></TextInput>
                        </View>
                        <View style={styles.inputTextView}>
                            <Text>Password</Text>
                            <TextInput placeholder={"********"}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signUpTextbtn} onPress={() => this.props.navigation.navigate('SignInScreen')}>
                            <Text style={styles.signUpText} >Don't have an account? Sign In</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            

            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerloginContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        flex:1,
    },
    companyLogoLeft:{
        paddingTop:40,
        fontSize:48,
        fontWeight:"900",
        color:"black",
    },
    companyLogoRight:{
        color:"red",
    },
    loginDisplay:{
        fontSize:24,
        fontWeight:"400",
        color:"black",
        paddingTop:20,
        paddingBottom:40,
    },
    inputTextView:{
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:"gray",
        paddingTop:15,
    },
    loginButton:{
        marginTop:15,
        backgroundColor:"#0066ff",
        borderRadius:50,
        width:"95%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
    }, 
    signUpTextbtn:{
        paddingTop:20,
    },
    signUpText:{
        color:"black",
    }, 
  });  
    


export default LoginScreen;