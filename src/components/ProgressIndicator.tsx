import React from "react";
import { ActivityIndicator, View } from "react-native";

const ProgressIndicator = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <ActivityIndicator size={50} color={"black"} />
    </View>
  );
};

export default ProgressIndicator;
