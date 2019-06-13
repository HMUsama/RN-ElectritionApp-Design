import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Right, Icon, Button, Title } from 'native-base'
import { Constants } from 'expo';

export default class Login extends React.Component {
  
  navigation=()=>{
    this.props.navigation.navigate("Payment")
  }
  
  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight}}>
     <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{this.op}}>
              <Icon name='menu' />
            </Button>
          </Right>
      </Header>
   <Content>
   </Content>
   <Footer />
    </Container>
    );
  }
}


