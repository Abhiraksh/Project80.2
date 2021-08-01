import * as React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "react-navigation-tabs";
import ExchangeScreen from "../screens/exchangeScreen";
import HomeScreen from "../screens/homeScreen";

export const AppTabNavigator = createBottomTabNavigator({
    ExchangeItems:{
        screen: ExchangeScreen,
        navigationOptions:{
            tabBarIcon: <Image source={require("../assets/exchange.png")}
            style={{width:20,height:20}}/>
        }
    },
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon: <Image source={require("../assets/home.png")}
            style={{width:20,height:20}}/>
        }
    }
})