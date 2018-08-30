import React from 'react';
import { ListItem, Input, Body, Text, Right, Icon } from 'native-base';
import variable from '../../../native-base-theme/variables/platform';

export default class ItemForm extends React.Component {

  state = {
    selected: false
  };

  onFocus = () => this.setState({ selected: true });

  onBlur = () => this.setState({ selected: false });

  onPress = () => this.state.selected 
    ? this.inputText.wrappedInstance.blur() 
    : this.inputText.wrappedInstance.focus();

  setFocus = () => this.inputText.wrappedInstance.focus();

  render() {
    const { selected } = this.state;
    const { hasError, keyboardType, label, value, onChangeText, autoCapitalize } = this.props;
    const style = hasError ? { borderBottomColor: variable.inputErrorBorderColor } : null 
    return(
      <ListItem onPress={ this.onPress } selected={ selected } style={ style }>
        <Body>
          <Text>{ label }</Text>
          <Input
            autoCapitalize={autoCapitalize || 'sentences'}
            keyboardType={ keyboardType || 'default' }  
            ref={ input => this.inputText = input }
            onFocus={ this.onFocus }
            onBlur={ this.onBlur }
            value={ value ? value.toString() : '' }
            onChangeText={ text => onChangeText(text) }
          />
        </Body>
        <Right>
          <Icon name={ selected ? 'ios-arrow-down' : 'ios-arrow-forward' } />
        </Right>
      </ListItem>
    );
  }
};