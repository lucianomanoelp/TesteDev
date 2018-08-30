import React from 'react';
import { Alert } from 'react-native';
import { StackActions } from 'react-navigation';
import { graphql, compose } from 'react-apollo';
import { getVeiculo, updateVeiculo, updateVeiculoCache } from './graphql';
import { ScreenContainer, FormVeiculo } from '../../components';
import Navbar from './Navbar';
import NavbarEditando from './NavbarEditando';
import DetalhesFeed from './DetalhesFeed';

class DetalhesScreen extends React.Component {

  state = { 
    isEditando: false,
    isSalvando: false,
    veiculo: undefined
  };

  onVoltarPress = () => this.props.navigation.dispatch(StackActions.pop({ n: 1 }));

  onEditarPress = () => this.setState({ isSalvando: false, isEditando: true, veiculo: this.props.veiculo });

  onCancelarPress = () => this.setState({ isSalvando: false, isEditando: false });

  onSalvarPress = () =>  this.formVeiculo.submitForm(this.updateVeiculo);

  updateVeiculo = async ({ _id, marca, modelo, ano_fabricacao, ano_modelo, cor }) => {
    const data = { marca, modelo, ano_fabricacao: parseInt(ano_fabricacao), ano_modelo: parseInt(ano_modelo), cor };
    try {
      this.setState({ isSalvando: true })
      await this.props.updateVeiculo({
        variables: { id: _id, data }
      });

      await this.props.updateVeiculoCache({
        variables: { id: _id, data }
      });
      
      Alert.alert(
        'TesteDev',
        'Veículo editado com sucesso',
        [
          { 
            text: 'OK',
            onPress: () => this.setState({ isSalvando: false, isEditando: false })
          }
        ],
      );
    } catch(err) {              
      this.setState({ isSalvando: false });
      Alert.alert(
        'TesteDev',
        'Houve uma falha ao tentar editar o veículo',
        [{ text: 'OK' }],        
      );
    }
  };

  render() {
    const { isEditando, isSalvando, veiculo } = this.state;
    return(
      <ScreenContainer>
        {
          isEditando 
            ? <NavbarEditando
                isSalvando={ isSalvando }
                onCancelarPress={ this.onCancelarPress }
                onSalvarPress={ this.onSalvarPress } />
            : <Navbar
                onVoltarPress={ this.onVoltarPress }
                onEditarPress={ this.onEditarPress } />
        }

        {
          isEditando
            ? <FormVeiculo 
                ref={ form => this.formVeiculo = form }
                veiculo={ veiculo }
              />
            : <DetalhesFeed 
                error={ this.props.error } 
                loading={ this.props.loading } 
                veiculo={ this.props.veiculo } 
              />
        }
      </ScreenContainer>
    );
  }
}

export default compose(
  graphql(updateVeiculoCache, { name: 'updateVeiculoCache' }),
  graphql(updateVeiculo, { name: 'updateVeiculo' }),
  graphql(getVeiculo, {
    options: (props) => ({ variables: { id: props.navigation.getParam('veiculoId', '') } }),
    props: ({ data: { error, loading, veiculo } }) => ({ error, loading, veiculo })    
  })
)(DetalhesScreen);