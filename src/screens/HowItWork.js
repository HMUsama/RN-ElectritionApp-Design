import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container,Drawer, Header, Content, Footer, Left, Body, Right, Button, Title,Item,Input } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from 'react-native-material-dropdown'; 
import SideBar from '../components/Menubar/SideBar'

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
      <Drawer ref={(ref) => { this.drawer = ref; }}
      content={
      <SideBar navigator={this.navigator} />
    } 
      onClose={() => this.closeDrawer()}
    > 
    <Container style={{marginTop: Constants.statusBarHeight,}}>
        <Header style={{backgroundColor:'#ffff',height:150,borderBottom:0}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{marginLeft:8,marginTop:25}}>
            <Left>
                    <Button transparent >
                     <Icon name='bars' size={35} color={'#ff1a1a'} onPress={()=>this.openDrawer()}/>
                    </Button>
                </Left>
            </View>
            <View style={{marginLeft:50,marginTop:2,}}>
            <Body>
                <View style={{width:200,height:50, borderWidth: 1,borderColor: '#fff', borderBottomLeftRadius: 5,}}>
                <Dropdown 
                    // label='Select category'
                    data={Category}
                    selectedItemColor={'#ff1a1a'}
                    onChangeText={e => this.setState({ category: e })}
                  />
                </View>
                <View style={{width:200,borderRadius:5}}>
                <Dropdown
                    // label='Select category'
                    data={Category}
                    selectedItemColor={'#ff1a1a'}
                    onChangeText={e => this.setState({ category: e })}
                  />
                </View>
                </Body>
            </View>
          </View>
              
              
        </Header>
        <Content>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginLeft:80,marginTop:30,backgroundColor:'#000',height:100}}>
          </View>
          <View style={{marginLeft:90,marginTop:40,backgroundColor:'#000',height:100}}>
          </View>
          <View style={{marginLeft:90,marginTop:40,backgroundColor:'#000',height:100}}>
          </View>
        </View>
        </Content>
    </Container>
      </Drawer>
    );
  }
}
