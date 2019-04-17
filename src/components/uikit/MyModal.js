import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Modal from "react-native-modal";
import {ModalStyles} from "../../style/Style";

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
            <View style={ModalStyles.button}>
                <Text>{this.props.text2}</Text>
            </View>
        </TouchableOpacity>
    );
    renderModalContent = () => (
        <View style={ModalStyles.modalContent}>
            <Text>{this.props.text1}</Text>
            {this.renderButton()}
        </View>
    );

    render() {
        return (
            <View style={ModalStyles.container}>
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


