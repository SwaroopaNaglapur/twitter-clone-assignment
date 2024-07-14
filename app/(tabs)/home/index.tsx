import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import { homeFeed } from "@/app/mock";
import React from "react";
import Tweet from "@/components/Tweet";
import { OtherColors } from "@/constants/Colors";

Tweet;
export default function HomeScreen() {
  return (
    <SafeAreaView  style={styles.container}>
      <FlatList
        data={homeFeed}
        renderItem={({item}) => <Tweet data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: OtherColors.exexlight_gray,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
