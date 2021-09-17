import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import TechnologyComponent from "../pages/technology";
import ScienceComponent from "../pages/science";

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
  return (
    <Navigator>
      <Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="theaters" size={size} color={color} />;
          },
        }}
        name="TechnologyComponent"
        component={TechnologyComponent}
      />

      <Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="stars" size={size} color={color} />;
          },
        }}
        name="ScienceComponent"
        component={ScienceComponent}
      />
    </Navigator>
  );
}

export default Tabs;
