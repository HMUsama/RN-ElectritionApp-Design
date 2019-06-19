import React from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import {Container,Drawer,Content,List,ListItem,Left,Body,Right,Switch,Header, Button} from 'native-base'
import Icon from "react-native-vector-icons/FontAwesome"

export default class SideBar extends React.Component {
 
  Setting=()=>{ 
    console.log("THIS PROPS",this.props)
    // this.props.navigation.navigate('Setting')
   };
  render() {
    return (
    // <Drawer ref={(ref) => { this.drawer = ref; }}
    //   content={<SideBar navigator={this.navigator} />} 
    //   onClose={() => this.closeDrawer()}
    //   > 
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
              <TouchableOpacity>
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
              <TouchableOpacity>
              <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#ffff' }}>CONTACT US</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="share-alt" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity>
              <Text style={{marginTop:5,marginLeft:35,fontSize:15,color:'#ffff' }}>INVITE FRINDS</Text>
              </TouchableOpacity>
            </Left>
          </ListItem>
          <ListItem style={{marginTop:15,}}>
            <Left>
              <Icon name="handshake-o" style={{marginTop:5,marginLeft:0,fontSize:30,color:'#565D5A' }}/>
              <TouchableOpacity>
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
      // </Drawer>
    );
  }
}

