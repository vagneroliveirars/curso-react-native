/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Menu from './src/Menu';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => Menu);
