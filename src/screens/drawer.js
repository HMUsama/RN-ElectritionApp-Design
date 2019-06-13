import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from '../screens/MenuDrawer';
export default class DrawerExample extends Component {
 
  
  componentDidMount() {
    console.log(this.drawer) 
  }


  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer (){ 
    this.drawer._root.open() 
  };

  render() {
      return (
        <Drawer ref={(ref) => { this.drawer = ref;}}  
           content={<SideBar  navigator={this._navigator}/>}
           onOpen={()=>this.openDrawer()}  
           onClose={() => this.closeDrawer()} 
        >
        </Drawer>
    )
  }
 
}
