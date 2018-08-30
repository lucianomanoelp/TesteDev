import React from 'react';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import Routes from './Routes';

export default () => (
  <StyleProvider style={getTheme()}>
    <Routes />
  </StyleProvider>
);