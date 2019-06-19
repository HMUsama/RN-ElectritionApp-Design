import React from 'react'
import { 
        createMaterialTopTabNavigator, 
        createDrawerNavigator, 
        createStackNavigator, 
        createAppContainer } from "react-navigation"
import {Platform,Dimensions} from 'react-native' 
import MenuDrawer from '../components/Menubar/MenuBar'
import Confirm from '../screens/Confirm'
import Payment from '../screens/Payment'
import HowItWork from '../screens/HowItWork'
import DawnY from '../screens/DawnY'
import Setting from '../screens/Setting'


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.85,
    contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const StackNavigator = createStackNavigator({
    HowItWork: {
        screen: HowItWork
      },
      Confirm: {
        screen: Confirm
      },
      Payment:{
        screen:Payment
    },
     Setting:{
        screen:Setting
    },
})
const DrawerNavigator = createDrawerNavigator(
    {   
        HowItWork: {
        screen: HowItWork
        },
        Confirm: {
        screen: Confirm
        },
        Payment:{
        screen:Payment
        },
        DawnY:{
        screen:DawnY
        },
    },
    DrawerConfig
)

const Drawer = createAppContainer(DrawerNavigator)

export default Drawer
