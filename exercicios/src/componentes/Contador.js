import React, { Component } from "react"
import { View, Text, TouchableHighlight } from 'react-native'

/**
 * Componentes baseados em classe suportam guardar o estado do componente.
 * Componentes funcionais não suportam guardar estado, são stateless.
 * As propriedades do componente são somente leitura: algo como this.props.numero++
 * não funcionaria para incrementar o número.
 */
export default class Contador extends Component {

    // Objeto que guarda o estado do componente. Pode conter mais de um atributo.
    state = {
        numero: this.props.numeroInicial
    }
 
    maisUm = () => this.setState({ numero: this.state.numero + 1 })

    limpar = () => this.setState({ numero: 0 })

    // Componentes baseados em classe precisam ter pelo menos o método render
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }

}