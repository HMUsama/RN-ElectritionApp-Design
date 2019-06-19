import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import Drawer from './Drawer'

const StackNavigator = createStackNavigator({
        Drawer: {
          screen: Drawer
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
