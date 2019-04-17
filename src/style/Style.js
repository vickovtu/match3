import {StyleSheet} from "react-native";


export const StartStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export const QrStyles = StyleSheet.create({
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

export const HomeStyles = StyleSheet.create({
    con: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    container: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'flex-start',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    },
});

export const ModalStyles = StyleSheet.create({
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
export const ScoreStyles = StyleSheet.create({
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