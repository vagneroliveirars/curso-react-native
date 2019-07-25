import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>
        
        <View style={styles.button}>
          <Button label='AC'/>
          <Button label='/'/>
          <Button label='7'/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='*'/>
          <Button label='4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='-'/>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='+'/>
          <Button label='0'/>
          <Button label='.'/>
          <Button label='='/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    // wrap permite quebra na linha dos componentes
    flexWrap: 'wrap'
  }
})
