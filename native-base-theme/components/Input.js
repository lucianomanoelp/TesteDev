import { Platform } from 'react-native';
import variable from './../variables/platform';

export default (variables = variable) => {
	const inputTheme = {
		'.multiline': {
			height: null,
		},
		//height: variables.inputHeightBase,
    color: variables.inputColor,
		paddingLeft: Platform.OS === 'ios' ? 10 : 11,
		paddingRight: Platform.OS === 'ios' ? 10 : 11,
		flex: 1,
    fontSize: 12, //variables.inputFontSize,
    paddingVertical: Platform.OS === 'ios' ? null : 0,    
	};

	return inputTheme;
};
