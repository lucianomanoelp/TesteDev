import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Header, Button, Icon, Text, Item, Input } from 'native-base';

export default class Searchbar extends React.Component {

  state = {
    value: ''
  };
  
  onChangeText = text => {    
    this.props.onChangeText(text);
    this.setState({value: text});
  };

  onBtnClearPress = () => {
    Keyboard.dismiss();
    this.props.onChangeText('');
    this.setState({value: ''});
  };

  onBtnMicPress = () => console.log('Abrir microfone');

  render() {
    return(
      <Header searchBar>
        <Item>
          <Icon name='search'/>
          
          <Input            
            placeholder='Search'
            value={this.state.value} 
            onChangeText={(text) => this.onChangeText(text)}
          />
          
          <ButtonAction 
            iconName={this.state.value ? 'ios-close-circle' : 'ios-mic'}
            onPress={this.state.value ? this.onBtnClearPress : this.onBtnMicPress.bind(this)}
          />
        </Item>

        <ButtonCancel visible={this.state.value} onPress={this.onBtnClearPress} />
      </Header>
    );
  }
}

const ButtonCancel = props => {
  if(!props.visible) return null;

  return (
    <Button transparent {...props} >
      <Text>Cancel</Text>
    </Button>
  );
};

const ButtonAction = props => (
  <TouchableOpacity {...props}>
    <Icon name={props.iconName} style={{ color: '#616161' }} />
  </TouchableOpacity>
);