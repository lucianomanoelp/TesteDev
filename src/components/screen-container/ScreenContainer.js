import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from 'native-base';

export const ScreenContainer = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Container>
      { children }
    </Container>
  </SafeAreaView>
);

