import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container,Drawer, Header, Content, Footer, Left, Body, Right, Title,Item,Input,Button, H1,CheckBox } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome"; 
// import { Button } from 'react-native-elements';

export default class AddAnother extends React.Component {
 
  link=()=>{
    this.props.navigation.navigate("createBottomTabNavigator")
  }


  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
            <Header style={{backgroundColor:'#ff1a1a'}}>
                    <Left>
                        <Button transparent >
                        <Icon name='arrow-left' size={25} color={'#ffff'}/>
                        <Title style={{marginLeft:20}}>Confirm</Title>
                        </Button>
                    </Left>
                    <Body>
                    </Body>
            </Header>
            <Content>
            <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#E9ABB2',marginBottom:15}}>
              <View style={{marginLeft:10,marginTop:30}}>
                <CheckBox checked={false} color={'#ff1a1a'}  size={25}fontSize={20}/>
              </View>
              <View style={{marginLeft:25,marginTop:10}}>
                  <Text style={{fontSize:20,fontFamily:'MarkPro Medium',fontWeight:'200'}}>Basic Mini & Pedi</Text>
                  <Text style={{color:'#565D5A'}}>Basic Mini & Pedi</Text>
                  <Text style={{color:'#565D5A'}}>1883 sea Island Pace , </Text>
              </View>
            </View>
            </Content>
       </Container>
    );
  }
}

const styles = StyleSheet.create({

});
