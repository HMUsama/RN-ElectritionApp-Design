import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container,Drawer, Header, Content, Footer, Left, Body, Right, Button, Title,Item,Input } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from 'react-native-material-dropdown'; 
import SideBar from '../components/Menubar/SideBar'

export default class Setting extends React.Component {
 
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
      <Drawer ref={(ref) => { this.drawer = ref; }}
      content={
      <SideBar navigator={this.navigator} />
    } 
      onClose={() => this.closeDrawer()}
    > 
    <Container style={{marginTop: Constants.statusBarHeight,}}>
        <Header style={{backgroundColor:'#fffccc',height:150,borderBottom:0}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{marginLeft:8,marginTop:25}}>
              <Left>
                  <Button transparent >
                    <Icon name='bars' size={35} color={'#ff1a1a'} 
                    // onPress={()=>this.openDrawer()}
                    onPress={()=>this.props.navigation.openDrawer()}
                    />
                  </Button>
              </Left>
            </View>
            <Body>
            </Body>
          </View>
        </Header>
        <Content>
        <View style={{flex: 1,}}>
          <View style={{marginLeft:0,marginTop:0,backgroundColor:'#000',color:'#fff',height:100}}>
            <Text>POLO</Text>
          </View>
          <View style={{marginLeft:0,marginTop:0,backgroundColor:'#f5f8',height:100}}>
          </View>
          <View style={{marginLeft:0,marginTop:0,backgroundColor:'#ff1a',height:100}}>
          </View>
        </View>
        </Content>
    </Container>
      </Drawer>
    );
  }
}
