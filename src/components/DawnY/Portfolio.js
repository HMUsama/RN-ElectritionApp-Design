import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { Container, Header, Content, Footer } from 'native-base'
import { Constants } from 'expo';
import pice from '../../../assets/visa2.png'
import pice1 from '../../../assets/visa3.png'

export default class Portfolio extends React.Component {
 


  render() {
    return (
     <Container style={{display:"flex",flex: 1,backgroundColor:'#ffff',marginTop:0,}}>
        <Content style={{}}>
            <View style={{flex: 1, flexDirection: 'column',}}>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginLeft:2,marginRight:2,marginTop:3}}>  
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:0 ,marginRight:0}}/>
                    </View>
                    <View style={{}}>
                     <Image source={pice1} style={{width:160,height:152,marginLeft:1,marginRight:0 }}/>
                    </View>
                    <View style={{}}>
                    <Image source={pice1} style={{width:160,height:152,marginLeft:1 ,marginRight:0}}/>
                    </View>
                </View>
            </View>
        </Content>
    </Container>
    // <View style={{backgroundColor:'#EE9E1A',marginTop:0,height:500}}>

    // </View>
    );
  }
}

const styles = StyleSheet.create({

});
