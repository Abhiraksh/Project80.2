 import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoginScreen from "./screens/loginScreen"
import { AppTabNavigator } from './components/AppTabNav';
import {AppDrawerNavigator}  from './components/AppDrawerNav';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}

const SwitchNavigator = createSwitchNavigator({
     LoginScreen : {screen: LoginScreen},
     Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
   flex: 1,

  },
});
