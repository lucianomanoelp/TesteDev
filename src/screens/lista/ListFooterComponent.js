import React from 'react';
import { View } from 'react-native';
import { Text, Spinner, Button, Icon } from 'native-base';

export default ListFooterComponent = ({ error, loading, onTentarNovamentePress }) => {  
  if(error) 
    return(
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#d9534f' }}>Falha ao buscar veículos</Text>
        <Button transparent full primary iconLeft onPress={onTentarNovamentePress}>
          <Icon name='sync' />
          <Text>Tentar novamente</Text>
        </Button>
      </View>
    );

  if(loading) return(<Spinner color='#1A191B' />);

  return null;
};