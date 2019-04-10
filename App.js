import React from "react";
import {StyleSheet} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './src/components/scrins/HomeScreen';
import QR from './src/components/scrins/QR'



const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Details: QR
    },
    {
        initialRouteName: "Home"
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'flex-start',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 100,
        width:100
    }
});

// export default createAppContainer(AppNavigator);