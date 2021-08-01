import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import { withNavigation } from 'react-navigation';

export default class MyHeader extends Component {
  constructor(props){
   super(props);
  }

  navigate=()=>{
    this.props.navigation.navigate("LoginScreen")
  }
  render(){
  return (
    <Header
      leftComponent={<Icon name = "bars" type="font-awesome" color = "blue"
      onPress={()=>{
       this.navigate();
      }}></Icon>}
      centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
  );
    }
};
