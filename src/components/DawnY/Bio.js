import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container, Header, Content, Footer } from 'native-base'
import { Constants } from 'expo';
import { Button } from 'react-native-elements';

export default class Bio extends React.Component {
 
  link(){
    this.props.navigation.navigate("BottomTab")
  }


  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
    <Content>
            <View style={{flex:1,marginLeft:10,}}>
                <Text style={{color:'#565D5A'}}>i have 15 year being cosemtloogist.
                      i love when i restore youre confidence 
                      and feeling beatiful inside and out 
                </Text>
            </View>
            <View style={{backgroundColor:'green',width:50}} onPress={this.links}>
              <Text>Route</Text>
            </View>
    </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});
