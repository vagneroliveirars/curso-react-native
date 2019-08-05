import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/Functions';
import params from './src/Params';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  /**
   * Retorna a quantidade de minas baseado no número de linhas, colunas 
   * e nível de dificuldade. O params.difficultLevel é um percentual em cima da quantidade
   * de linhas e colunas do tabuleiro.
   */
  minesAmount = () => Math.ceil(params.getRowsAmount() * params.getColumnsAmount() * params.difficultLevel)

  createState = () => {
    return {
      board: createMinedBoard(params.getRowsAmount(), params.getColumnsAmount(), this.minesAmount())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
