import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field';

export default props => {
    /**
     * React usa a propriedade key para identificar de forma única um componente 
     * e atualizá-lo de forma mais eficiente quando é necessário.
     * Se o atributo key não for declarado não gera erro, porém gera uma
     * advertência e vai causar uma ineficiência na atualização do componente.
     */
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            /**
             * Transforma o objeto field do array em um componente Field, 
             * retornando um array de JSX
             */ 
            return <Field { ...field} key={c} onOpen={() => props.onOpenField(r, c)}/>
        })
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})
