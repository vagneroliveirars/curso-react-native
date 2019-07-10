import React, { Component } from "react"
import { View, StyleSheet } from 'react-native'

import Simples from "./componentes/Simples";
import ParImpar from "./componentes/ParImpar";
/**
 * import dos componentes Inverter e MegaSena ficam dentro de chaves {} 
 * porque estão dentro do arquivo Multi.js, que exporta mais de um componente
 * sem 'export default', somente 'export'. Se usasse o 'export default' poderiam
 * ser importados fora das chaves, mas 'export default' só pode ser usado para 
 * um único componente dentro do arquivo.
 */
import { Inverter, MegaSena } from "./componentes/Multi";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto="Flexível!!!"/>  
                <ParImpar numero={32}/>
                <Inverter texto="React Native"/>
                <MegaSena numeros={8}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})