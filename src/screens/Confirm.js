import React from 'react';
import { StyleSheet, Text, View,Picker,Image,TextInput,YellowBox } from 'react-native';
// import { SocialIcon,Icon} from 'react-native-elements';
// import Icon from "react-native-vector-icons/FontAwesome"; 
import Icon from "react-native-vector-icons/AntDesign"; 
import { createBottomTabNavigator } from 'react-navigation'
YellowBox.ignoreWarnings(['Warning: ...']);

import ConfirmInfo from '../components/Confirm/ConfirmInfo'

export default createBottomTabNavigator({
    ConfirmInfo:{
      screen:ConfirmInfo,
      navigationOptions:{
        tabBarLabel:'SAVED',
        tabBarIcon:({tintColor})=>(
           <Icon name="hearto" color={tintColor} size={24}/>
        )
      }
    },
},
 {
  tabBarOptions:{
    activeTintColor:'#000000',
    inactiveTintColor:'gray',   
    style:{
      backgroundColor:'#555',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'#fff',
      shadowOpacity:0.5,
      elevation:5,
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff8200',
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
  },
});
