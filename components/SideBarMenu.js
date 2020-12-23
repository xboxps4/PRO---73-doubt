import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class SideBarMenu extends Component
{
    render()
    {
      return(
          <View style = {styles.container}>
             <View style = {styles.container2}>
               <DrawerItems {...this.props}></DrawerItems>
             </View>
             <View style = {styles.logout}>
                 <TouchableOpacity style = {styles.logoutButton} onPress = {()=>{
                     this.props.navigation.navigate('WelcomeScreen')
                     firebase.auth().signOut();
                 }}>
                   <Text style = {styles.text}>
                       Log out
                   </Text>
                 </TouchableOpacity>
             </View>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    container2 : {
        flex : 0.8
    },
    
    logout : {
        flex : 0.2,
        justifyContent : 'flex-end',
        paddingBottom : 30,
    },
    
    logoutButton : {
        height : 30,
        width : "100%",
        justifyContent : 'center',
        padding : 10
    },

    text : {
        fontWeight : 'bold',
        fontSize : 20
    }
})
