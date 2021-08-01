        import * as React from "react";
        import CustomSideBarMenu from "./CustomSideBarMenu";
        import {AppTabNavigator} from "./AppTabNav";
        import { createDrawerNavigator } from "react-navigation-drawer";

        export const AppDrawerNavigator = createDrawerNavigator({
            Home:{
                screen: AppTabNavigator
            },
        },
        {
          contentComponent: CustomSideBarMenu
        },
        {

            initialRouteName: "Home"
        })