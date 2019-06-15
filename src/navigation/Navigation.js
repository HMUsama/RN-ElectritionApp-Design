import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../screens/Login' 
import Signup  from '../screens/Signup' 
import Payment    from '../screens/Payment'
import DawnY      from '../screens/DawnY'
import BottomTab  from '../screens/Confirm'
import HowItWork  from '../screens/HowItWork'
import Setting from '../screens/Setting'
import SideBar from '../components/Menubar/SideBar'

const StackNavigator = createStackNavigator({
        
        HowItWork: {
          screen: HowItWork
        },
        Setting: {
          screen: Setting
        },
        // BottomTab: {
        //   screen: BottomTab
        // },
        // Payment: {
        //   screen: Payment
        // },
        // SideBar: {
        //   screen: SideBar
        // },
        
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator
