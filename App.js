import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './src/components/scrins/HomeScreen';
import QR from './src/components/scrins/QR';
import StartScreen from './src/components/scrins/StartScreen';
import { Provider } from 'react-redux';
import {createStore} from "redux";
import {reducer} from "./src/store/reducers";


//создание всех экранов
const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Details: QR,
        Start: StartScreen
    },
    {
        initialRouteName: "Start"
    });


// создание общего стора (хранилище с данными)
const store = createStore(reducer)

//создание контейнера с экранами навигации
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AppContainer/>
            </Provider>)
    }
}