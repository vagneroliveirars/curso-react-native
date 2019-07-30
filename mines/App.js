import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import params from './src/Params'
import Field from './src/components/Field';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field/>
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default App;
