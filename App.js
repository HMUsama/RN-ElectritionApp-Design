import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigation';
// import MenuBar from './src/screens/MenuBar'
import { Font ,AppLoading } from 'expo';
import { Root } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // ...Ionicons.font,
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
       {/* <MenuBar/> */}
       <Navigator/>
       </Root>
    )
  }
}