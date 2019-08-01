import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../Params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
    /**
     * A sintaxe de atribuição via desestruturação (destructuring assignment) é 
     * uma expressão do ECMAScript 2015 que possibilita extrair dados de arrays 
     * ou objetos em variáveis distintas. Nesse caso, esperamos receber dentro de 
     * props os atributos mined, open e nearMines
     */
    const { mined, open, nearMines, exploded, flagged } = props 
    
    const styleField = [styles.field]
    if (open) styleField.push(styles.open)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    if (!open && !exploded) styleField.push(styles.regular)

    // Muda a cor do texto conforme a quantidade minas para sinalizar o grau de "perigo"
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'   
    }

    return (
        <View style={styleField}>
            {!mined && open && nearMines > 0
            ? <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
            : false}

            {mined && open ? <Mine/> : false}
            
            {flagged && !open ? <Flag/> : false}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    open: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
})