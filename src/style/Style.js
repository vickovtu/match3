import {StyleSheet} from "react-native";


export const StartStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
});

export const QrStyles = StyleSheet.create({
    scaner: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 5,
        borderColor: 'black',
        borderWidth: 4,
        height: 210,
        width:210,
        borderRadius: 10,
    },
});

export const HomeStyles = StyleSheet.create({
    con: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    container: {
        height: 480,
        width: 380,
        flexDirection: 'column',
        flexShrink: 2,
        justifyContent: 'flex-start',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    catcontainer : {
        flexDirection: 'row',
    }
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
        paddingRight: 20,
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