import React from 'react';
import { Header, Body, Title, Left, Right, Button, Icon, Text} from 'native-base';

export default ({ onVoltarPress, onEditarPress }) => (
  <Header>
    <Left>
      <Button transparent onPress={onVoltarPress}>
        <Icon name='arrow-back' />
        <Text>Voltar</Text>
      </Button>
    </Left>
    <Body>
      <Title>Detalhes</Title>
    </Body>
    <Right>
      <Button hasText transparent onPress={onEditarPress}>
        <Text>Editar</Text>
      </Button>
    </Right>
  </Header>
);