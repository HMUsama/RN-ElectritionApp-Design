import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Dimensions ,Image,ScrollView,AsyncStorage} from 'react-native'
import {Container,Drawer,Content,List,ListItem,Left,Body,Right,Switch,Header} from 'native-base'
// import { Ionicons } from '@expo/vector-icons'
import Icon from "react-native-vector-icons/FontAwesome"



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

 class MenuDrawer extends React.Component {
constructor(){
    super()
    this.state={
    }
}
 
HowItWork=()=>{
  this.props.navigation.navigate("HowItWork")
}
Setting=()=>{
    this.props.navigation.navigate("Payment")
}
Confirm=()=>{
    this.props.navigation.navigate("Confirm")
}
MenuDrawer=()=>{
    this.props.navigation.navigate("MenuDrawer")
}
DawnY=()=>{
    this.props.navigation.navigate("DawnY")
}
  render() {
    return (
        <Container>
        <Content style={{backgroundColor:'#333333',}}>
          <ListItem>
            <Left>
              {/* <Icon name="bars"/> */} 
              <Text style={{marginTop:40,marginLeft:70,fontSize:30,color:'#ff7733',padding:20 }}>Usama </Text>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="cog" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity 
              onPress={this.HowItWork}
              >
              <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#ffff' }}>HOW IT WORKS ?</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="wrench" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity onPress={this.Setting}>
              <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#ffff' }}>SETTINGS</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="envelope-o" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity onPress={this.Confirm}>
              <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#ffff' }}>CONTACT US</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="share-alt" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity onPress={this.MenuDrawer}>
              <Text style={{marginTop:5,marginLeft:35,fontSize:15,color:'#ffff' }}>INVITE FRINDS</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="handshake-o" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity onPress={this.DawnY}>
              <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#ffff' }}>POLICIES</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="sign-out" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity>
              <Text style={{marginTop:5,marginLeft:35,fontSize:15,color:'#ffff' }}>LOGOUT</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
       
       
         
         
        </Content>
      </Container>
    );
  }
}

export default MenuDrawer;


const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor:'lightgray',
    },
    // scroller:{
    //     flex:1,
    // },
    profile: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        // justifyContent:'center',
        paddingTop:10,
        borderBottomWidth:0,
        borderBottomColor:'#777777',
    },
    profileText: {
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:10,
        marginTop:25,
    },
    profileName: {
        fontSize:20,
        textAlign:'left', 
        paddingBottom:5,
        marginRight:2,
        // marginLeft:1,
        marginTop:50,
        color:'white',
    },
    imageView: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        // flexDirection:'column',
        // justifyContent:'center',
    },
    img: {
        height:80,
        width:80,
        marginTop:20,
        borderRadius:45,
        // marginLeft:5,
        // marginBottom:50,
    },
    topLinks:{
        height:150,
        backgroundColor:'black'
    },
    bottomLinks:{
        flex:1,
        // marginRight:50,
        marginLeft:50,
        backgroundColor:'#1C8FAB',
        paddingTop:5,
        paddingBottom:200,
        paddingLeft:10,
    },
    link:{
        flex:1,
        fontSize:20,
        padding:10,
        paddingLeft:25,
        // margin:5,
        textAlign:'left',
        marginLeft:50,
    },
    footer:{
        // flex:1,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
    }, 
    version:{
    //    flex:1,
       textAlign:'center',
       marginRight:30,
       color:'black',
    }, 
    disription:{
       flex:1,
       marginLeft:30,
       fontSize:16,

    }, 
});
