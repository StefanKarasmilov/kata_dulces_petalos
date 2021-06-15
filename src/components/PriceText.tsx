import React from "react";
import { Text } from "react-native";

interface Props {
  text: string,
}

const PriceText = ({ text }: Props) => {
  return (
    <Text
      style={{
        fontSize: 18,
        color: "red"
      }}>
      {text} €
    </Text>
  );
};

export default PriceText;
