import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Round Off</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300' }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});