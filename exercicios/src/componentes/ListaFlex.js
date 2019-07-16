import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 9.1 },
    { id: 3, nome: 'Bia', nota: 5.4 },
    { id: 4, nome: 'Claudia', nota: 7.6 },
    { id: 5, nome: 'Roberto', nota: 6.8 },
    { id: 6, nome: 'Rafael', nota: 9.9 },
    { id: 7, nome: 'Guilherme', nota: 10.0 },
    { id: 8, nome: 'Rebeca', nota: 8.8 },
    { id: 9, nome: 'Tobias', nota: 8.8 },
    { id: 10, nome: 'João', nota: 7.9 },
    { id: 11, nome: 'Ana', nota: 9.1 },
    { id: 12, nome: 'Bia', nota: 5.4 },
    { id: 13, nome: 'Claudia', nota: 7.6 },
    { id: 14, nome: 'Roberto', nota: 6.8 },
    { id: 15, nome: 'Rafael', nota: 9.9 },
    { id: 16, nome: 'Guilherme', nota: 10.0 },
    { id: 17, nome: 'Rebeca', nota: 8.8 },
    { id: 18, nome: 'Tobias', nota: 8.8 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    /**
     * A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript 
     * que possibilita extrair dados de arrays ou objetos em variáveis distintas.
     * Exemplo: ({ item }) 
     * @param {*} param0 
     */
    const renderItem = ({ item }) => 
        /**
         * Retorna um componente aluno contendo todos os atributos de item usando o operador
         * spread. Item terá os atributos nome e nota que esperamos receber em aluno.
         */
        <Aluno {...item}/>

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString}/>
        </ScrollView>
    )
}
