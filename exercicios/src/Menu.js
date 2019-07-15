import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'

const MainNavigator = createDrawerNavigator({
    ValidarProps: {
        screen: () => <ValidarProps label="Teste: " ano={19}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        // É necessário usar arrow function para passar parâmetros para o componente
        screen: () => <MegaSena/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível' />
    }
}, { drawerWidth: 300 });

const App = createAppContainer(MainNavigator);

export default App;
