import React from 'react';
import { StyleSheet, Text, View,YellowBox, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Badge } from 'native-base';
import { createBottomTabNavigator} from 'react-navigation'
YellowBox.ignoreWarnings(['Warning: ...']);
import Icon from "react-native-vector-icons/AntDesign"; 
import AddAnother from '../components/Confirm/AddAnother'
import SaveIT from '../components/Confirm/SaveIT'
import BookIT from '../components/Confirm/BootIT'



export default createBottomTabNavigator({
  AddAnother:{
      screen:AddAnother,
      navigationOptions:{
        tabBarLabel:'Add Another',
        tabBarIcon:({tintColor})=>(
           <Icon name="pluscircleo" color={tintColor} size={35}/>
        )
      }
    },
    SaveIT:{
      screen:SaveIT,
      navigationOptions:{
        tabBarLabel:'SAVED IT',
        tabBarIcon:({tintColor})=>(
           <Icon name="staro" color={tintColor} size={35}/>
        )
      }
    },
    BookIT:{
      screen:BookIT,
      navigationOptions:{
        tabBarLabel:'Book IT',
        tabBarIcon:({tintColor})=>(
           <Icon name="checkcircleo" color={tintColor} size={35}/>
        )
      }
    },
},
 {
  tabBarOptions:{
    activeTintColor:'#000000',
    inactiveTintColor:'gray',   
    style:{
      // backgroundColor:'#555',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'#fff',
      shadowOpacity:0.5,
      elevation:5,
      size:30,
      tabBarLabel:50
    }
  }
})