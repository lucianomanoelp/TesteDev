import React from 'react';
import { Header, Body, Title, Left, Right, Button, Icon, Text} from 'native-base';

export default ({ isSalvando, onVoltarPress, onSalvarPress }) => (
  <Header>
    <Left>
      <Button transparent onPress={onVoltarPress}>
        <Icon name='arrow-back' />
        <Text>Voltar</Text>
      </Button>
    </Left>
    <Body>
      <Title>Novo</Title>
    </Body>
    <Right>
      <Button disabled={ isSalvando } hasText transparent onPress={ onSalvarPress }>
        <Text>{ isSalvando ? 'Salvando' : 'Salvar' }</Text>
      </Button>
    </Right>
  </Header>
);