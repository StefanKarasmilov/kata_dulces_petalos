import React from "react";
import { Text } from "react-native";

interface Props {
  text?: string
}

const SubtitleText = ({ text }: Props) => {
  return (
    <Text style={{ fontSize: 16, opacity: 0.7 }}>{text}</Text>
  );
};

export default SubtitleText;
