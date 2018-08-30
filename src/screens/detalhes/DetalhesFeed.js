import React from 'react';
import { Content, Body, Text, List, ListItem, Spinner } from 'native-base';

export default ({ error, loading, veiculo }) => {
  if(loading) 
    return(
      <Content>
        <Spinner color='#1A191B' />
      </Content>
    );

  if(error) 
    return(
      <Content style={{ alignContent: 'center', alignItems: 'center' }}>
        <Text>Houve uma falha ao buscar o veículo</Text>
      </Content>
    );

  return(
    <Content>
      <DetalhesVeiculo veiculo={ veiculo } />
    </Content>
  );  
};

const DetalhesVeiculo = ({ veiculo: { marca, modelo, ano_fabricacao, ano_modelo, cor } }) => (
  <List>
    <DetalhesVeiculoItem label='Marca' value={ marca } />
    <DetalhesVeiculoItem label='Modelo' value={ modelo}  />
    <DetalhesVeiculoItem label='Ano / Fabricação' value={ ano_fabricacao } />
    <DetalhesVeiculoItem label='Ano / Modelo' value={ ano_modelo } />
    <DetalhesVeiculoItem label='Cor' value={ cor } />
  </List>
);

const DetalhesVeiculoItem = ({ label, value }) => (
  <ListItem>
    <Body>
      <Text>{ label }</Text>
      <Text note>{ value }</Text>
    </Body>
  </ListItem>
);