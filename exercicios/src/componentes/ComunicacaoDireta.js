import React, { Component } from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

export const Filho = props =>
    /** 
     * Operador spread {...fonte} (espalha as propriedades da constante fonte 
     * e passa como parâmetro para o componente Text que também tem um atributo style)
    */
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* props.children */}
        { 
            /**
             * Usando esta estratégia de passar as propriedades do pai para os filhos só 
             * funciona se o pai tive um único filho. Com mais de um elemento não funciona.
             */
            // React.cloneElement(props.children, {...props, ...props.children})
        }
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana'/>
            <Filho nome='Gui'/>
            <Filho nome='Davi'/>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca'/>
            <Filho nome='Renato'/>
        </Pai>
    </View>