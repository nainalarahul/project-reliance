import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import LIMSService from './LIMSService';
import MIISService from './MIISService';

class Homepage extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the Main Page</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Main: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
    },
  },
  LIMSService: {
    screen: LIMSService,
    navigationOptions: {
      title: 'LIMS',
    },
  },
  MIISService: {
    screen: MIISService,
    navigationOptions: {
      title: 'MIIS',
    },
  },
});

export default AppNavigator;
