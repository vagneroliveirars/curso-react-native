import React from "react"
import { Text } from 'react-native'
import Padrao from "../estilo/Padrao"

/**
 * export default: não precisa dar nome para a função
 * export: sem o default obrigatoriamente precisa criar uma funcao com nome. 
 * Se for uma arrow function (que é uma função anônima) deve armazenar em uma constante.
 * 
 * @param {*} props 
 */
export const Inverter = props => {
    const textoInvertido = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{textoInvertido}</Text>
}

/**
 * Retorna números aleatórios e em ordem crescente conforme quantidade informada
 * 
 * @param {*} props 
 */
export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

