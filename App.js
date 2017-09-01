import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloWorld = () => (
  <Text>
    Hello World
  </Text>
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tony was here</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <HelloWorld />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
