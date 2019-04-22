import {NEW_SCORE, PLUS_SCORE, RESTART_GAME} from "../constants/constans";
import {TouchableOpacity, View} from "react-native";
import Cat from "../components/uikit/Cat";
import React from "react";

export const changeScore = (newS = 10) => {
    // console.log('changeScore')
    return {
        type: PLUS_SCORE,
        payload: newS
    }
}

export const newScore = (newSc)=> {
    return{
        type: NEW_SCORE,
        payload: newSc
    }
}

export const restartGame = () => {
    return {
        type: RESTART_GAME,
    }
}










// this.props.newScore(this.state.bonus)
//save & put actions to props
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch)
//     return {
//         changeScore: bindActionCreators(changeScore, dispatch),
//         newScore: bindActionCreators(newScore, dispatch),
//
//     }
// }