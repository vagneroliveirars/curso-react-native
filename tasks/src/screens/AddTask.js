import React, { Component } from 'react'
import {
    Modal,
    Text,
    View,
    TextInput,
    DatePickerIOS,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native'
import moment from 'moment'
import CommonStyles from '../CommonStyles'

const initialState = { desc: '', date: new Date() }

export default class AddTask extends Component {

    state = { ...initialState }

    save = () => {
        if (this.state.desc.trim()) {
            const data = { ...this.state }
            this.props.onSave(data)
            this.setState({ ...initialState })
        } else {
            Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa')
        }
    }

    render() {
        return (
            <Modal onRequestClose={this.props.onCancel} visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset} />
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput placeholder='Descrição...' style={styles.input}
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} />
                    <DatePickerIOS mode='date' date={this.state.date}
                        onDateChange={date => this.setState({ date })} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: CommonStyles.colors.default
    },
    header: {
        fontFamily: CommonStyles.fontFamily,
        backgroundColor: CommonStyles.colors.default,
        color: CommonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15
    },
    input: {
        fontFamily: CommonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    }
})