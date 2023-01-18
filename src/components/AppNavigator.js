import { createStackNavigator } from 'react-navigation-stack';
import LIMSService from './LIMSService';
import MIISService from './MIISService';
import OMPROService from './OMPROService';

const AppNavigator = createStackNavigator({
  Page1: {
    screen: LIMSService,
    navigationOptions: {
      title: 'LIMS',
    },
  },
  Page2: {
    screen: MIISService,
    navigationOptions: {
      title: 'MIIS',
    },
  },
  Page3: {
    screen: OMPROService,
    navigationOptions: {
      title: 'OMPRO',
    },
  },
});

export default AppNavigator;
