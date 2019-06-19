import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container,Drawer, Header, Content, Footer, Left, Body, Right, Button, Title,Item,Input } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from 'react-native-material-dropdown'; 
import SideBar from '../components/Menubar/SideBar'
// import MenuBar from './MenuBar'

export default class HowItWork extends React.Component {
 
  openDrawer (){ 
    this.drawer._root.open()
   };
   closeDrawer (){ 
    this.drawer._root.close()
   };
 
  render() {
    let Category = [{
      value: 'Mobile',
    }, {
      value: 'Laptop',
    },
    {
      value: 'Tablets',
    }, {
      value: 'Tickets',
    }, {
      value: 'Tv',
    }, {
      value: 'Motorbike',
    }, {
      value: 'Car',
    },
    {
      value: 'Home  ',
    },
    ];
    return (
    //   <Drawer ref={(ref) => { this.drawer = ref; }}
    //   content={<MenuBar navigator={this.navigator} />} 
    //   onClose={() => this.closeDrawer()}
    // > 
    <Container  style={{marginTop: Constants.statusBarHeight,}}>
      
        <Header style={{ backgroundColor: "transparent",backgroundColor:'#ffcccc',height:40,}} iosBarStyle={"light-content"} noShadow>
          <View style={{flex: 1, flexDirection: 'row',}}>
             <Left style={{marginTop:25}}>
                  <Button transparent >
                    <Icon name='bars' size={35} color={'#ff1a1a'} onPress={()=>this.openDrawer()}/>
                  </Button>
             </Left>
          </View>
            <View  style={{flex: 1, flexDirection: 'column',}}>
              <Body style={{backgroundColor:'#000',width:100,height:40,marginTop:50,marginLeft:50,borderColor:'#000',borderBottomColor:"#92C9EB"}}>
                <Dropdown  baseColor={'#fff'}  data={Category} />  
              </Body>
            </View>
        </Header>
       



        <Content>
            {/* <View style={{flex: 1, flexDirection: 'column',marginTop:1}}>
              <View style={{flex: 1, flexDirection: 'row',marginTop:1}}>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1,}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',marginTop:1}}>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1,}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',marginTop:1}}>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1,}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',marginTop:1}}>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1,}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
                <View style={{marginLeft:0,marginTop:0,backgroundColor:'#fff',height:160,width: 150,borderTopColor:'#fff',borderColor:'#ff1a1a',borderWidth:1}}>
                  <Text>Pakistan</Text>
                </View>
              </View>
            </View>
       */}
        </Content>
    </Container>
      // </Drawer>
    );
  }
}
