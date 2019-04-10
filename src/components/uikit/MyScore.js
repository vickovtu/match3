import React from 'react';
import { View, Text, StyleSheet} from 'react-native'


const MyScore = ({ title }) => {
	const {viewStyle, textStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}> Score : {title}</Text>

		</View>
		)
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
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

export default MyScore;