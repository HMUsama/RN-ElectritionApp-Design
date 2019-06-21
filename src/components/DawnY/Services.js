import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container, Header, Content, Footer,Item ,Icon,Input,Button,Accordion } from 'native-base'
import { Constants } from 'expo';

export default class Services extends React.Component {

  render() {
    const dataArray = [
        { title: "BASIC FACIALS", content: "Lorem ipsum dolor sit amet" },
        { title: "BLACK DETOX MASK", content: "Lorem ipsum dolor sit amet" },
        { title: "BROWN WAXING", content: "Lorem ipsum dolor sit amet" },
        { title: "CHAIN", content: "Lorem ipsum dolor sit amet" },
        { title: "CLASSIC MANICULAR", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
        { title: "CLASSIC MANICULAR", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", },
      ];
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
          <Header searchBar rounded style={{
              marginTop:1,borderColor: '#000000',
              backgroundColor:'#ffff',borderColor:'black',
              marginLeft:20,marginRight:20,borderRadius: 15,}}>
          <Item>
            <Input placeholder="Search For Services" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text style={{color:'#ffff'}}>Search</Text>
          </Button>
        </Header>
        <Content style={{marginTop:10,borderTopWidth:0}}>
          <Accordion
            dataArray={dataArray}
            iconStyle={{ backgroundColor:'#D12',fontSize:20,color:'#fff' }}
            headerStyle={{ backgroundColor: "#ffffff" }}
            contentStyle={{ backgroundColor: "#F69B94" }}
          />
        </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});