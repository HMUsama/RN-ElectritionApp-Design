import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content,List,ListItem,Left,Icon,Body,Right,Switch,Header, Button} from 'native-base'
import { Constants } from 'expo';

export default class Login extends React.Component {
  
  navigation=()=>{
    this.props.navigation.navigate("Payment")
  }
  goto_Dawn=()=>{
    this.props.navigation.navigate("DawnY")
  }
  render() {
    return (
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
                    {/* <Button transparent > */}
                    {/* <Icon name='arrow-right'/> <Text>USama</Text> */}
                    {/* </Button> */}
                    <Text  onPress={this.goto_Dawn}>USama</Text> 
                 </Left>
              </Body>
              <Right>

              </Right>
              </ListItem>
          </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
 
});
