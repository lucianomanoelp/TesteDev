import React from 'react';
import { Alert } from 'react-native';
import { Content, List } from 'native-base';
import ItemForm from './ItemForm';
import marcas from './marcas';

export class FormVeiculo extends React.Component {  

  state = { 
    veiculo: this.props.veiculo,
    errors: [],    
  };

  validations = {
    marca: {
      test: text => marcas.some(marca => text === marca),
      message: `Marca deve estar entre ${JSON.stringify(marcas)}`
    },
    ano_fabricacao: {      
      test: text => /^(20[0-1]\d|2020)$/.test(text),
      message: 'Ano/Fabricação deve ser entre 2000 e 2020'
    },
    ano_modelo: {
      test: text => /^(20[0-1]\d|2020)$/.test(text),
      message: 'Ano/Modelo deve ser entre 2000 e 2020'
    }
  }  

  handleTextChanged = (text, fieldName) =>
    this.setState({ 
      veiculo : {
        ...this.state.veiculo,
        [fieldName]: text
      }
    });  

  validateForm = () => {
    const errors = [];
    Object.keys(this.state.veiculo).forEach(key => {      
      if(!this.state.veiculo[key] || !this.state.veiculo[key].toString().length) {
        errors.push({ fieldName: key, message: '' });
      } else if(this.validations[key] && !this.validations[key].test(this.state.veiculo[key].toString())) {
        errors.push({ fieldName: key, message: this.validations[key].message });
      }
    });
    return errors;
  };

  submitForm = fnCalback => {
    const errors = this.validateForm();
    this.setState({ errors });
    if(errors.length) {
      let message = errors.map(error => error.message).filter(message => message.length).join('\n');
      message = message.length ? `Todos os campo são obrigatórios e \n ${message}` : 'Todos os campo são obrigatórios';
      Alert.alert(
        'TesteDev',
        message,
        [{ text: 'OK' }],        
      );
      return;
    }
    fnCalback(this.state.veiculo);    
  };

  clearForm() {
    this.setState({
      veiculo: {
        marca: null,
        modelo: null,
        ano_fabricacao: null,
        ano_modelo: null,
        cor: null
      }
    });
    this.inputMarca.setFocus();
  };

  fieldHasError = fieldName => this.state.errors.some(f => f.fieldName === fieldName);

  render() {
    const { veiculo } = this.state;

    return(
      <Content>      
        <List>
          <ItemForm 
            label='Marca' 
            value={ veiculo.marca }
            autoCapitalize='characters'
            onChangeText={ text => this.handleTextChanged(text, 'marca') }
            hasError={ this.fieldHasError('marca') }
            ref={ ref => this.inputMarca = ref} 
          />
          
          <ItemForm 
            label='Modelo'
            value={ veiculo.modelo }
            autoCapitalize='characters'
            onChangeText={ text => this.handleTextChanged(text, 'modelo') } 
            hasError={ this.fieldHasError('modelo') } 
          />
          
          <ItemForm 
            keyboardType='numeric' 
            label='Ano / Fabricação' 
            value={ veiculo.ano_fabricacao }
            onChangeText={ text => this.handleTextChanged(text, 'ano_fabricacao') } 
            hasError={ this.fieldHasError('ano_fabricacao') } 
          />
          
          <ItemForm 
            keyboardType='numeric' 
            label='Ano / Modelo' 
            value={ veiculo.ano_modelo } 
            onChangeText={ text => this.handleTextChanged(text, 'ano_modelo') }
            hasError={ this.fieldHasError('ano_modelo') } 
          />
          
          <ItemForm 
            autoCapitalize='characters'
            label='Cor' value={ veiculo.cor } 
            onChangeText={ text => this.handleTextChanged(text, 'cor') } 
            hasError={ this.fieldHasError('cor') } 
          />
        </List>
      </Content>
    );
  }

};