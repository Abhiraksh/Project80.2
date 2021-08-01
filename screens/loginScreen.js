import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      firstName: "",
      lastName:"",
      address:"",
      contact: "",
      confirmPassword:"",
      isModalVisible: false
    }
  }

  showModal =()=>{
    return(
      <Modal
      animationType="slide"
      transparent={true}
      visible = {this.state.isModalVisible}>
      <View style={styles.modalContainer}> 
       <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text style={styles.modalTitle}>Register</Text>
        <TextInput style={styles.formTextInput}
        placeholder="First Name"
        onChangeText={(text)=>{
          this.setState({
            firstName: text
          })
        }}
        ></TextInput>
        <TextInput 
        style={styles.formTextInput}
        placeholder="Last Name"
        onChangeText={(text)=>{
          this.setState({
            lastName: text
          })
        }}></TextInput>
        <TextInput style={styles.formTextInput}
        placeholder="Email"
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
        ></TextInput>
        <TextInput 
        style={styles.formTextInput}
        placeholder="Password"
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}></TextInput>
        <TextInput style={styles.formTextInput}
        placeholder="Confirm Password"
        onChangeText={(text)=>{
          this.setState({
            confirmPassword: text
          })
        }}
        ></TextInput>
        <TextInput 
        style={styles.formTextInput}
        placeholder="Contact"
        onChangeText={(text)=>{
          this.setState({
          contact: text
          })
        }}></TextInput>
        <TextInput 
        style={styles.formTextInput}
        placeholder="Address"
        onChangeText={(text)=>{
          this.setState({
          address: text
          })
        }}></TextInput>

        <TouchableOpacity style={styles.registerButton}
          onPress={()=>{
            this.userSignUp(this.state.emailId,this.state.password, this.state.confirmPassword)
          }}>
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}
          onPress={()=>{
            this.setState({
              isModalVisible: false,
            })
          }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
       </KeyboardAvoidingView>
      </View>
      </Modal>
      
    );
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
  

      this.props.navigation.navigate("HomeScreen");
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password, confirmPassword) =>{
    if(password!== confirmPassword){
      return(
       alert("Passwords do not Match! Please check again!")
      );
    }
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      db.collection("users").add({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        contact: this.state.contact,
        email: this.state.emailId,
        address: this.state.address
      })
      return Alert.alert("User Registered Successfully!")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={{justifyContent: "center",
      alignItems: "center"}}>
        {this.showModal()}
      </View>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>Barter System</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="Enter an Email"
          placeholderTextColor = "#000"
          
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          placeholder="Enter the Password"
          placeholderTextColor = "#000"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity
          style={styles.registerButton}
            onPress={()=>{this.setState({
              isModalVisible: true,
            })}}
            >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:58,
   fontWeight:'bold',
   marginBottom: -100,
   color : '#fff',
  
   
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   marginLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
 
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 },
 button2:{
  width:300,
  height:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:25,
  backgroundColor:"purple",
  shadowColor: "#000",
  shadowOffset: {
     width: 0,
     height: 8,
  },
  marginBottom: 50,
},

 orText:{
   textAlign: "center",
   fontWeight: "bold",
   color:"#fff",
   marginTop: -12,
   marginLeft: -10,
   fontSize: 21,
 }
})