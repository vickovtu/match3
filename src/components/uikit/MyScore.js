import React from 'react';
import { View, Text} from 'react-native'
import {ScoreStyles} from "../../style/Style";


const MyScore = ({ title }) => {
	const {viewStyle, textStyle} = ScoreStyles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}> Score : {title}</Text>
		</View>
		)
}

export default MyScore;