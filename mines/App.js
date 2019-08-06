import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MineField from './src/components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Functions';
import params from './src/Params';
import Header from './src/components/Header';

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
      board: createMinedBoard(params.getRowsAmount(), params.getColumnsAmount(), this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu!', 'Que pena!')
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    // Atualiza o estado para refletir exatamente o estado da tela
    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    this.setState({ board, won })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}/>
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField} 
            onSelectField={this.onSelectField}/>
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
