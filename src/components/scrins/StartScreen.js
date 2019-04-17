import React from "react";
import {Button, View} from "react-native";
import {StartStyles} from "../../style/Style"
import MyScore from "../uikit/MyScore";
import {navStart} from "../../style/Navigation";
import { connect } from "react-redux";

class StartScreen extends React.Component {
    static navigationOptions = navStart
    BonusScore = (value) => {
        let score = this.state.score
        score += value
        this.setState({score: score})
    }
    Home = () => {
        this.props.navigation.navigate('Home')
    }
    QR = () => {
        this.props.navigation.navigate('Details', {bonusScore: this.BonusScore})
    }
    render() {
        console.log("lol_1")
        console.log("props", this.props)
        return (
            <View style={StartStyles.container}>
                <MyScore title={this.props.ball}/>
                <Button title='Play to game' onPress={this.Home}/>
                <Button title='Scan Qr Code' onPress={this.QR}/>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("state," , state)
    return{
        ball: state.score
    }
}
export  default connect(mapStateToProps)(StartScreen);