import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
