import React from "react";
import { Text } from "react-native";

interface Props {
  text?: string
}

const TitleText = ({ text }: Props) => {
  return (
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{text}</Text>
  );
};

export default TitleText;
