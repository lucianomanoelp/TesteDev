import React from 'react';
import { Body, ListItem, Text, Right, Icon } from 'native-base';

export default VeiculoListItem = ({ onPress, veiculo }) => (
  <ListItem button onPress={() => onPress(veiculo._id)}>
    <Body>
      <Text>{ veiculo.marca }</Text>
      <Text note>{ veiculo.modelo }</Text>
    </Body>
    <Right>
      <Icon name="ios-arrow-forward" />
    </Right>
  </ListItem>
);
