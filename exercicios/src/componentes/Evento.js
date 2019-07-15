import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

/**
 * Componente controlado refletindo o state.
 * Neste exemplo, é capturado um evento onChangeText no TextInput que chama a
 * função alterarTexto passando o texto do input e atualizando a propriedade texto
 * do state. Após alterar o texto, o componente Text é automaticamente atualizado.
 * Para criar um componente não controlado, uma das estratégias é inicializar a 
 * propriedade do state com null. Exemplo:
 * state = { texto : null }
 */
export default class Evento extends Component {

    state = {
        texto : ''
    }

    alterarTexto = texto => {
        // Novo recurso do ecmascript permite passar somente 'texto', pois neste caso chave e valor tem o mesmo nome
        this.setState( { texto })
    }

    render () {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} style={Padrao.input} onChangeText={this.alterarTexto}/>
            </View>
        )
    }

}
