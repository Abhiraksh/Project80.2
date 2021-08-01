import * as React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View} from "react-native";
import firebase from "firebase";
import db from "../config";
import MyHeader from '../components/MyHeader'

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
        userId: firebase.auth().currentUser.email,
        itemName: "",
        description: "",
        }
    }

    uniqueId=()=>{
        return(
        Math.random.toString().substring(5)
        );
    }

    addItem=(itemName, description)=>{
      var userId = this.state.userId;
      var randomId = this.uniqueId();
      db.collection("items_feed").add({
        user_id: userId,
        item_name: itemName,
        description: description,
        item_id: randomId
    })
    this.setState({
        itemName: "",
       description: "",
    })
    }
    render(){
        return(
        <View style={styles.container}>
          <MyHeader title="Exchange Screen"/>
          <View style={{flex: 1}}>
         <TextInput
         style={styles.loginBox}
         placeholder="Enter Item Name"
         multiline
         value={this.state.itemName}
         onChangeText={(text)=>{
           this.setState({
              itemName: text
           })
         }}
         ></TextInput>
         <TextInput
         style={styles.loginBox}
         placeholder="Description"
         numberOfLines={10}
         multiline
         value={this.state.itemName}
         onChangeText={(text)=>{
           this.setState({
               description: text
           })
         }}
         ></TextInput>

         <TouchableOpacity style={styles.button2}
         onPress={()=>{
             this.addItem(this.state.itemName, this.state.description);
         }}>
             <Text style={styles.buttonText}>Add Item</Text>
         </TouchableOpacity>
         </View>
        </View>
        
        );
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#afe',
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