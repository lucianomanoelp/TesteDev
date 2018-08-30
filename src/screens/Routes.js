import { createStackNavigator } from 'react-navigation';

import ListaScreen from './lista/ListaScreen';
import DetalhesScreen from './detalhes/DetalhesScreen';
import AdicionarScreen from './adicionar/AdicionarScreen';

const navigationOptions = {
  header: null
};

export default createStackNavigator({
  Lista: {
    screen: ListaScreen,
    navigationOptions
  },
  Detalhes: {
    screen: DetalhesScreen,
    navigationOptions
  },
  Adicionar: {
    screen: AdicionarScreen,
    navigationOptions
  }
})