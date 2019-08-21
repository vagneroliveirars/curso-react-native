
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import CommonStyles from './src/CommonStyles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontFamily: CommonStyles.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default App;
