import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Right, Button, Title,Item,Input,List,ListItem, } from 'native-base'
import { Constants } from 'expo';
import Icon from "react-native-vector-icons/FontAwesome"; 
import SideBar from '../components/Menubar/SideBar';
import visa from '../../assets/visa2.png';
import visa1 from '../../assets/visa3.png';

export default class Payment extends React.Component {
    // static navigationOptions = {
    //   drawerIcon:(
    //     // <View style={{borderBottomColor:'#fff',borderBottomWidth:1,width:100}}>
    //     <Icon name='wrench' size={25} color={'#fff'} />
    //     // </View>
    //   )
    // } 

  render() {
    return (
     <Container style={{marginTop: Constants.statusBarHeight,backgroundColor:'#ffff'}}>
     <Header style={{backgroundColor:'#b80000'}}>
            <Left>
              <Button transparent>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.toggleDrawer()}
            >
                <Icon name='arrow-left' size={25} color={'#ffff'}/>
            </TouchableOpacity>
              </Button>
            </Left>
            <Body>
              <Title>Payment</Title>
            </Body>
    </Header>
    <Content>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginLeft:80,marginTop:30}}>
          <Image source={visa} style={{width:70,height:60, }}/>
          </View>
          <View style={{marginLeft:90,marginTop:40}}>
          <Image source={visa1} style={{width:90,height:50, }}/>
          </View>
        </View>


        <View style={{flex: 1, flexDirection: 'row',marginTop:50}}>
          <View style={{width: 50, height: 50,marginLeft:15,marginTop:15,}}>
          <Icon name="credit-card-alt" size={25}/>
          </View>
          <View style={{width: 50, height: 10,marginTop:20}}>
          <Text>Card</Text>
          </View>
          <View style={{width: 250, height: 50,marginLeft:50}}>
          <Input placeholder='*** *** *** **' style={{borderBottomWidth:1 }} />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50,marginTop:15,marginLeft:15}}>
          <Icon active name='credit-card' size={25}/>
          </View>
          <View style={{width: 50, height: 10,marginTop:20}}>
          <Text>Expirity</Text>
          </View>
          <View style={{width: 250, height: 50,marginLeft:50}}>
          <Input placeholder='MM /yy' style={{borderBottomWidth:1 }} />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50,marginTop:15,marginLeft:15}}>
          <Icon active name='lock' size={30}/>
          </View>
          <View style={{width: 50, height: 10,marginTop:20}}>
          <Text>CVC</Text>
          </View>
          <View style={{width: 250, height: 50,marginLeft:50}}>
          <Input placeholder='123'  keyboardType='numeric' style={{borderBottomWidth:1 }} />
          </View>
        </View>

        <View style={{height: 100,marginLeft:10,marginRight:10,marginTop:25}}>
          <Text>Karachi is the best city in Pakistan Karachi is the best city in PakistanKarachi is the best city in Pakistan
          Karachi is the best city in PakistanKarachi is the best city in PakistanKarachi is the best city in Pakistan
          </Text>
          </View>

          <TouchableOpacity>
          <View style={{height: 100, backgroundColor: '#b80000',
                      color:'white',padding:10,width:300,height:50,
                      marginLeft:100,marginTop:50}}>
           <Text style={{marginLeft:100,color:'#ffffff'}}>Pay $ 120</Text>
          </View>
          </TouchableOpacity>
        </View>
    </Content>
    {/* <Footer /> */}
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});
