import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

export default class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
    }
  }

  singup=()=>{
    this.props.navigation.navigate("Login")
    console.log("Login")
  }
  text=(e)=>{
    console.log(e.target)
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.MainView}>
        
          <View  style={styles.usernamepassword}>
            <Text style={styles.Text}>User Name</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter User Name'}
              // onChangeText={(name) => this.setState({ name })}
              onChangeText={this.text}
            />
          </View>
          <View  style={styles.usernamepassword}>
            <Text style={styles.Text}>Email</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter User Name'}
            />
          </View>

          <View style={styles.usernamepassword}>
            <Text style={styles.Text}>PassWord</Text>
            <TextInput 
              style={styles.InputFields}
              placeholder={'Enter PassWord'}
              secureTextEntry={true}
            />
          </View>


          <View style={styles.usernamepassword}>
            <Button 
              onPress={this.singup}
              title="SignIn"
            />
          </View>
       </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#194D33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView: {
    backgroundColor: '#3BADC7',
    borderRadius: 10,
    width:'100%',
    borderColor:'black',
    height:'60%',
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    justifyContent: 'center',
  },
  usernamepassword: {
    width:'80%',
    marginLeft:50,
    fontSize: 5,
    padding: 5,
  },
  Text: {
    borderColor:'black',
    justifyContent: 'center',
    // marginTop:'40%',
    padding: 3,
    height:'15%',
    fontSize: 20,
  },
  InputFields: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%', 
    // height: ,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor:'black',
    justifyContent: 'center',
    marginTop:10,
    // fontSize: 10,
  },
});

