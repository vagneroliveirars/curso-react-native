import { Dimensions } from 'react-native'

/**
 * Parâmetros do jogo
 * Math.floor arredonda para baixo para caber na tela
 */
const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        const witdth = Dimensions.get('window').width
        return Math.floor(witdth / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params