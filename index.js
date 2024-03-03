/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppPro from './AppPro';
import Homescreen from './Homescreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Homescreen);
