import React from "react";
import {Button, View} from "react-native";
import {StartStyles} from "../../style/Style"
import MyScore from "../uikit/MyScore";
import {navStart} from "../../style/Navigation";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import {changeScore, restartGame} from '../../store/actions'


class StartScreen extends React.Component {
    static navigationOptions = navStart
    Home = () => {
        this.props.navigation.navigate('Home')
    }
    NewGame = () => {
        this.props.restart()
        this.props.navigation.navigate('Home')
    }
    QR = () => {
        this.props.navigation.navigate('Details', )
    }

    render() {
        // console.log("props render", this.props)
        // const dispatch = this.props.dispatch;
        return (
            <View style={StartStyles.container}>
                <MyScore title={this.props.score}/>
                <Button title='Back to game' onPress={this.Home}/>
                <Button title='Scan Qr Code' onPress={this.QR}/>
                <Button title='New Game' onPress={this.NewGame}/>
            </View>
        );
    }
}

//put state to props
const mapStateToProps = (state) => {
    // console.log("state mapStateToProps ,", state)
    return {
        score: state.score
    }
}

//save & put actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        changeScore: bindActionCreators(changeScore, dispatch),
        restart: bindActionCreators(restartGame, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);