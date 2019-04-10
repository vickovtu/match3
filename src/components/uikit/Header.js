import React from 'react';
import { View, Text, StyleSheet} from 'react-native'


const Header = ({ title }) => {
	const {viewStyle, textStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{title}</Text>
		</View>
		)
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height:90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 22,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position : 'relative',

  },
  textStyle:{
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',

  }
});

export default Header;