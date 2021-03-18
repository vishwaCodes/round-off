import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Round Off</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          blurRadius={5}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
