import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ProductModel } from "../model/ProductModel";
import { useNavigation } from "@react-navigation/native";
import TitleText from "./TitleText";
import SubtitleText from "./SubtitleText";
import PriceText from "./PriceText";

interface Props {
  product: ProductModel,
}

const Card = ({ product }: Props) => {

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={event => navigate("DetailScreen", { id: product.id })}>
      <View style={styles.container}>
        <Image
          source={{ uri: product.imgUrl }}
          style={styles.image} />

        <View style={{
          margin: 8,
          flex: 1
        }}>
          <TitleText text={product.name} />
          <SubtitleText text={product.binomialName} />

          <View style={{
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <PriceText text={product.price.toString()} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
    marginTop: 6,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    height: 120,
    width: 110,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  }
});
