import React from "react";
import useProducts from "../hooks/useProducts";
import { StyleSheet, TextInput, View } from "react-native";
import Card from "../components/Card";
import ProgressIndicator from "../components/ProgressIndicator";

const HomeScreen = () => {

  const {products, isLoading, filterByName} = useProducts();

  {
    if (isLoading) {
      return (
        <ProgressIndicator/>
      );
    }
  }

  console.log("***** Entra!!")

  // console.log('*** Products: ', products)
  return (
    <View>
      <TextInput
        style={ styles.input }
        onChangeText={ filterByName }
        placeholder="Buscar por nombre"
        keyboardType="default"
      />
      {/*<FlatList*/ }
      {/*  data={ products }*/ }
      {/*  keyExtractor={ item => (item.id + Math.random().toString()) }*/ }
      {/*  renderItem={ info => <Card product={ info.item }/> }*/ }
      {/*  style={{marginBottom: 70}}*/ }
      {/*/>*/ }
      <Card product={ products[0] }/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    height         : 40,
    margin         : 8,
    padding        : 8,
    backgroundColor: "white",
    borderRadius   : 8
  }
});
