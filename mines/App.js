import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from './src/Params';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field/>
      <Field open/>
      <Field open nearMines={1}/>
      <Field open nearMines={2}/>
      <Field open nearMines={3}/>
      <Field open nearMines={6}/>
      <Field mined/>
      <Field mined open/>
      <Field mined open exploded/>
      <Field flagged/>
      <Field flagged open/>
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
