import React from 'react';
import { Platform } from 'react-native';
import { Header, Body, Text, Left, Right, Button, Title, Icon } from 'native-base';

const noLeft = Platform.OS === 'android';

export default ({ onCancelarPress, onSalvarPress, isSalvando }) => {
  
  const ButtonCancelarRight = () => Platform.OS === 'ios'
    ? null
    : (<Button hasText transparent onPress={ onCancelarPress }>
        <Text>Cancelar</Text>
      </Button>)
  
  return (
    <Header noLeft={noLeft}>
      <Left>
        <Button hasText transparent onPress={ onCancelarPress }>        
          <Text>Cancelar</Text>
        </Button>
      </Left>
      
      <Body>
        <Title>Editar</Title>
      </Body>
      
      <Right>
        <ButtonCancelarRight />
        <Button disabled={ isSalvando } hasText transparent onPress={ onSalvarPress }>
          <Text>{ isSalvando ? 'Salvando' : 'Salvar' }</Text>
        </Button>
      </Right>

    </Header>
  )
};
