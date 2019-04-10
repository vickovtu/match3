import React from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import BarcodeScanner from "../uikit/BarcodeScanner";
import MyModal from '../uikit/MyModal'

export default class QR extends React.Component {
    static navigationOptions = {
        headerTitle: 'Scan QR code',
        headerBackTitle: 'go back to dame',
        headerRight: (
            <Button
                onPress={() => alert('Scan QR code !')}
                title="Info"
                color="#fff"
            />
        ),
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
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
        console.log("data ", data)
        if (data == 10 || data == 25 ||data == 20)
            bonus = parseInt(data)
        this.setState({
            popup: true,
            bonus: bonus
        })

    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.state.popup ? <MyModal restart={this.resstart} text1='Вы oтсканировали QR!'
                                                text2={`Получить ${this.state.bonus} очков`}/> : null
                }
                <Text>Scan QR code</Text>
                <View style={styles.scaner}>
                    <BarcodeScanner  navigation={this.props.navigation}  up={this.UpModal}/>
                </View>
                <Button title="back to game" onPress={()=>{this.props.navigation.popToTop()}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scaner: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 100,
        width:100
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
