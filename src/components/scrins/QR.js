import React from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import BarcodeScanner from "../uikit/BarcodeScanner";
import MyModal from '../uikit/MyModal';
import {QrStyles} from "../../style/Style"
import {QrNav} from "../../style/Navigation";

export default class QR extends React.Component {
    static navigationOptions = QrNav
    state = {
        popup:false,
        bonus: 0
    }
    resstart = () => {
        this.setState({popup: false})
        this.props.navigation.state.params.bonusScore(this.state.bonus)
        this.props.navigation.popToTop()
    }
    UpModal = ({ type, data }) =>{
        let bonus = 0
        if (data == 10 || data == 25 ||data == 20)
            bonus = parseInt(data)
        this.setState({
            popup: true,
            bonus: bonus
        })

    }

    render() {
        return (
            <View style={QrStyles.container}>
                {
                    this.state.popup ? <MyModal restart={this.resstart} text1='Вы oтсканировали QR!'
                                                text2={`Получить ${this.state.bonus} очков`}/> : null
                }
                <Text>Scan QR code</Text>
                <View style={QrStyles.scaner}>
                    <BarcodeScanner  navigation={this.props.navigation}  up={this.UpModal}/>
                </View>
                <Button title="back to game" onPress={()=>{this.props.navigation.popToTop()}}/>
            </View>
        );
    }
}

