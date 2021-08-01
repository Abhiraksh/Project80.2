import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {ListItem} from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
         tradingItems: []
         }
         
         this.tradingRef = null;
    }

       getRequestedItemsList=()=>{
        this.tradingRef = db.collection("trading_items")
        .onSnapshot((snapshot)=>{
            var tradingItemsList = snapshot.docs.map((doc)=>{
                doc.data();
            })

            this.setState({
                tradingItems: tradingItemsList
            })
        })
       }

       keyExtractor=(item,index)=>{
        index.toString();
      }

      renderItem=(item,i)=>{
        <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        rightElement={
        <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
        ></ListItem>
      }

    render(){
      
        return(
         <View style = {styles.container}>
           <MyHeader title="Home Screen"/>
         <View style={{flex: 1}}>
             {this.state.tradingItems.length ===0
             ?(
                 <View style={styles.subContainer}>
                   <Text style={{fontSize: 20}}>No Items to Trade Right Now!</Text>
                 </View>
             ):
             (
                 <FlatList
                 keyExtractor = {this.keyExtractor}
                 data={this.state.tradingItems}
                 renderItem={this.renderItem}/>
             )}
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
   },
   subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  })