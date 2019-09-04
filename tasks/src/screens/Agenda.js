import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import ActionButton from 'react-native-action-button'
/**
 * Este import precisa ser carregado para o formato de datas do Brasil,
 * mas não possui um nome associado porque não será referenciado no arquivo
 */
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import CommonStyles from '../CommonStyles';
import Task from '../components/Task';
import AddTask from './AddTask';

export default class Agenda extends Component {
    state = {
        tasks: [
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() },
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() },
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() },
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() },
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() },
            { id: Math.random(), desc: 'Comprar o curso de React Native', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date() }
        ],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false
    }

    addTask = task => {
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.date
        })

        this.setState({ tasks, showAddTask: false }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => !task.doneAt
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
    }

    toogleFilter = () => {
        /** 
         * Alterna showDoneTasks para true ou false e chama a função de callback
         * filterTasks depois que o estado da aplicação for alterado, pois a função
         * this.setState é assíncrona
         * */ 
        this.setState({ showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)
    }

    toogleTask = id => {
        const tasks = this.state.tasks
            .map(task => {
                if (task.id === id) {
                    task.doneAt = task.doneAt ? null : new Date()
                }
                return task
            })

        this.setState({ tasks }, this.filterTasks)
    }

    /**
     * Método do ciclo de vida do React.
     * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
     */
    componentDidMount = () => {
        this.filterTasks()
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} 
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })}/>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toogleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
                                size={20} color={CommonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toogleTask={this.toogleTask}/>} />
                </View>
                <ActionButton buttonColor={CommonStyles.colors.today}
                    onPress={() => { this.setState({ showAddTask: true })}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: CommonStyles.fontFamily,
        color: CommonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taskContainer: {
        flex: 7,
    },
    iconBar: {
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})