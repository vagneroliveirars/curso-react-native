import React, { Component } from 'react'
import {
    Modal,
    Text,
    View,
    TextInput,
    DatePickerIOS,
    DatePickerAndroid,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Platform
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

    handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: this.state.date
        }).then(e => {
            if (e.action !== DatePickerAndroid.dismissedAction) {
                // Transforma uma data javascript em uma data do tipo moment
                const momentDate = moment(this.state.date)
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)

                // Atualiza o estado transformando a data do tipo moment em uma data javacript
                this.setState({ date: momentDate.toDate() })
            }
        })
    }

    render() {
        let datePicker = null
        if (Platform.OS === 'ios') {
            datePicker = <DatePickerIOS mode='date' date={this.state.date}
                onDateChange={date => this.setState({ date })} />
        } else {
            datePicker = (
                <TouchableOpacity onPress={this.handleDateAndroidChanged}>
                    <Text style={styles.date}>
                        { moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY') }
                    </Text>
                </TouchableOpacity>
            )
        }

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
                    {datePicker}
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
    },
    date: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center'
    }
})