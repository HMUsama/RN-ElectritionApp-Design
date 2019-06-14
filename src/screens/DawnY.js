import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Icon, Button, Title,Tab, Tabs, TabHeading,FooterTab} from 'native-base'
import { Constants } from 'expo';
import Bio from '../components/DawnY/Bio'
import Services from '../components/DawnY/Services'
import Portfolio from '../components/DawnY/Portfolio'


export default class DawnY extends React.Component { 
  

  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
     <Header style={{backgroundColor:'#D2190B'}}>
          <Left>
            <Button transparent >
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title style={{marginLeft:5,}}>Dawn Y.</Title>
          </Body>
      </Header>
       
    {/* <Content> */}
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:'#565D5A',color:'#ffff'}}><Text>BIO</Text></TabHeading>}>
            <Bio style={{color:'#ffff'}}/>
          </Tab>
          <Tab heading={ <TabHeading  style={{backgroundColor:'#565D5A',color:'#ffff'}}><Text>SERVICES</Text></TabHeading>}>
            <Services/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'#565D5A',color:'#ffffff'}}><Text>PORTFOLIO</Text></TabHeading>}>
            <Portfolio />
          </Tab>
        </Tabs>
    {/* </Content> */}
     <Footer>
          <FooterTab style={{backgroundColor:'#565D5A',color:'#ffff'}}>
            <Button>
           <Text>Beauty</Text>
            </Button>
            <Button>
            <Text>Booking</Text>
            </Button>
            <Button>
            <Text>Favorites</Text>
            </Button>
          </FooterTab>
      </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});
