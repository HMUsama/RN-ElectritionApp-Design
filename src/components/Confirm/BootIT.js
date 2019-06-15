import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container,Drawer, Header, Content, Footer, Left, Body, Right, Title,Item,Input,Button } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome"; 
// import { Button } from 'react-native-elements';

export default class BookIT extends React.Component {
 
  link=()=>{
    this.props.navigation.navigate("createBottomTabNavigator")
  }


  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
            <Header style={{backgroundColor:'#b80000'}}>
                    <Left>
                        <Button transparent >
                        <Icon name='arrow-left' size={25} color={'#ffff'}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Boot It</Title>
                    </Body>
            </Header>
            <Content>
                    <View style={{flex:1,marginLeft:10,}}>
                        <Text style={{color:'#565D5A'}}>i have 15 year being cosemtloogist.
                            i love when i restore youre confidence 
                            and feeling beatiful inside and out 
                        </Text>
                    </View>
                    <View style={{}} onPress={this.links}>
                      <Text>Route</Text>
                    </View>
            </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});
