import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Title, Left, Right, Button, Icon, Text } from 'native-base';

const noLeft = Platform.OS === 'android';

const NavLeft = () => Platform.OS === 'ios' ? <Left /> : null;

export default ({ onAddPress }) => (
  <Header noLeft={noLeft}>
    <NavLeft />
    <Body>
      <Title>Lista</Title>
    </Body>
    <Right>
      <Button transparent onPress={onAddPress}>
        <Icon name='add' />
      </Button>
    </Right>
  </Header>
);