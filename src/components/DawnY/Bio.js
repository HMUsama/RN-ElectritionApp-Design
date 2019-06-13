import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container, Header, Content, Footer } from 'native-base'
import { Constants } from 'expo';

export default class Bio extends React.Component {
 


  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
    <Content>
            <View>
                <Text>i have 15 year being cometologist.</Text>
            </View>
    </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});
