import React from 'react';
import { Alert } from 'react-native';
import { StackActions } from 'react-navigation';
import { ScreenContainer, FormVeiculo } from '../../components';
import Navbar from './Navbar';
import { createVeiculo } from './graphql';
import { graphql, compose } from 'react-apollo';

const initialValue = {
  marca: null,
  modelo: null,
  ano_fabricacao: null,
  ano_modelo: null,
  cor: null
};

class AdicionarScreen extends React.Component {

  state = {
    isSalvando: false,  
  };

  onVoltarPress = () => this.props.navigation.dispatch(StackActions.pop({ n: 1 }));

  onSalvarPress = () => {
    this.formVeiculo.submitForm(this.createVeiculo);
  };  

  createVeiculo = async ({ marca, modelo, ano_fabricacao, ano_modelo, cor }) => {
    const veiculo = { marca, modelo, ano_fabricacao: parseInt(ano_fabricacao), ano_modelo: parseInt(ano_modelo), cor };
    try {
      this.setState({ isSalvando: true });
      await this.props.createVeiculo({
        variables: {
          veiculo
        }
      });
      
      Alert.alert(
        'TesteDev',
        'Veículo adicionado com sucesso',
        [
          { 
            text: 'OK', 
            onPress: () => {
              this.setState({ isSalvando: false });
              this.formVeiculo.clearForm();
            }
          }
        ],
      );
    } catch(err) {
      this.setState({ isSalvando: false });
      Alert.alert(
        'TesteDev',
        'Houve uma falha ao adicionar o veículo',
        [{ text: 'OK' }],        
      );
    }
  };

  render() {
    return(
      <ScreenContainer>
        <Navbar 
          isSalvando={this.state.isSalvando}
          onVoltarPress={this.onVoltarPress} 
          onSalvarPress={this.onSalvarPress}
        />

        <FormVeiculo
          ref={ form => this.formVeiculo = form }
          veiculo={ initialValue }
        />
      </ScreenContainer>
    );
  }
}

export default compose(
  graphql(createVeiculo, { name: 'createVeiculo' })
)(AdicionarScreen);