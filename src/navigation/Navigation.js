import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../screens/Login' 
import Signup  from '../screens/Signup' 
import Drawer from '../screens/drawer'
import Payment from '../screens/Payment'
import DawnY from '../screens/DawnY'
import BottomTab from '../screens/Confirm'

const StackNavigator = createStackNavigator({
        
        // DawnY: {
        //   screen: DawnY
        // },
        BottomTab: {
          screen: BottomTab
        },
        Payment: {
          screen: Payment
        },
        // Drawer: {
        //   screen: Drawer
        // },
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator
