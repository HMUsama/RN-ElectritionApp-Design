import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Drawer,Content,List,ListItem,Left,Body,Right,Switch,Header, Button} from 'native-base'
import Icon from "react-native-vector-icons/FontAwesome"; 
import SideBar from '../components/Menubar/SideBar'


export default class MunuBar extends React.Component {  

  render() {
    return (
      <Drawer ref={(ref) => { this.drawer = ref; }}
        content={
        <SideBar navigator={this.navigator} />
      } 
        onClose={() => this.closeDrawer()}
      > 
      <Content style={{backgroundColor:'#ffff'}}>
           <Header style={{backgroundColor:'#194D33',height:150,}}>
           <Body>
                  <Text>USama</Text>
              </Body>
           </Header>
          <List>
              <ListItem>
              <Left>
                 <Icon name="plane"/> 
              </Left>
              <Body>
                  <Left>
                    <Button transparent >
                    <Icon name='arrow-right'/> <Text>USama</Text>
                    </Button>
                    <Text>USama</Text> 
                 </Left>
              </Body>
              <Right>

              </Right>
              </ListItem>
          </List>
      </Content>
      </Drawer>
    );
  }
}
