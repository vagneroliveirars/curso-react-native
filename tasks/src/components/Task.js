import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import CommonStyles from '../CommonStyles';

export default props => {
    let check = null
    if (props.doneAt !== null) {
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20} color={CommonStyles.colors.secondary}/>
            </View>
        )
    } else {
        check = <View style={styles.pending} />
    }

    // Estilo de linha cortada se a data 'doneAt' estiver preenchida
    const descStyle = props.doneAt != null ? { textDecorationLine: 'line-through'} : {}

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>{check}</View>
            <View>
                <Text>{props.desc}</Text>
            </View>
        </View>
    )
}