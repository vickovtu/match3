import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Modal from "react-native-modal";

export default class MyModal extends Component {
    state = {
        visibleModal: 1,
    };

    restart = ()=>{
        this.setState({ visibleModal: null })
        this.props.restart()
    }

    renderButton = () => (
        <TouchableOpacity onPress={this.restart}>
            <View style={styles.button}>
                <Text>{this.props.text2}</Text>
            </View>
        </TouchableOpacity>
    );

    renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>{this.props.text1}</Text>
            {this.renderButton()}
        </View>
    );


    render() {
        return (
            <View style={styles.container}>
                <Modal
                    isVisible={this.state.visibleModal === 1}
                    backdropColor={"lightblue"}
                    backdropOpacity={1}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}>
                    {this.renderModalContent()}
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },

});

