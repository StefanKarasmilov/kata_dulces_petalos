import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    id: string
  };
}

const Stack = createStackNavigator<RootStackParams>();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{ title: "Home" }} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{ title: "Detail" }} component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;
