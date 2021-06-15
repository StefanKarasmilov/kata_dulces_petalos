import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigator";
import useProductDetail from "../hooks/useProductDetail";
import ProgressIndicator from "../components/ProgressIndicator";
import TitleText from "../components/TitleText";
import SubtitleText from "../components/SubtitleText";
import PriceText from "../components/PriceText";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {
}

const DetailScreen = ({ route }: Props) => {

  const id = route.params.id;
  const { productDetail, isLoading } = useProductDetail({ productId: id });

  {
    if (isLoading) {
      return (
        <ProgressIndicator />
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: productDetail?.imgUrl
          }}
          style={styles.imageStyle}
        />
      </View>

      <View
        style={{
          padding: 16
        }}
      >
        <TitleText text={productDetail?.name} />
        <SubtitleText text={productDetail?.binomialName} />

        <View style={{
          marginTop: 16
        }}>
          <Text style={{ fontSize: 16 }}>
            Tipo de fertilizante: {productDetail?.fertilizerType}
          </Text>

          <Text style={{ fontSize: 16, marginTop: 8 }}>
            Altura en cm: {productDetail?.heightInCm}
          </Text>

          <Text style={{ fontSize: 16, marginTop: 8 }}>
            Riego por semana: {productDetail?.wateringsPerWeek}
            {(productDetail!.wateringsPerWeek > 1) ? " veces" : " vez"}
          </Text>

          <View style={{ marginTop: 8 }}>
            <PriceText text={`Precio: ${productDetail?.price}`} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: "#000",
    height: 300,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  imageStyle: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});
