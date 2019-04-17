import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import MyScore from '../uikit/MyScore';
import Cat from '../uikit/Cat';
import MyModal from '../uikit/MyModal'
import {GenerateMap} from './func/func'
import {HomeStyles} from "../../style/Style";
import {navHome} from "../../style/Navigation";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            points: 0,
            cats: GenerateMap(),
            popup: false
        };
        console.log('constructor')
    }
    static navigationOptions = navHome
    restart = () => {
        this.setState({popup: false})
    }
    RestartGame() {
        this.setState({
            score: 0,
            points: 0,
            cats: GenerateMap(),
            popup: false
        })
    }

    updateData = (value) => {
        let ct = this.state.cats
        let start = value
        let finish = value
        let score = this.state.score
        let points = this.state.points
        for (let i = value - 1; i >= 0 && ct[i] == ct[value]; i--)
            start = i
        for (let i = value; i <= ct.length && ct[i] == ct[value]; i++)
            finish = i
        if (start != finish) {
            let a = finish - start + 1
            if (a >= 3) {
                ct.splice(start, a)
                score = score + 30;
                points += 30

            }
        }
        if (points >= 100) {
            this.setState({popup: true})
            points = 0
            score += 10
        }
        this.setState({
            cats: ct,
            score: score,
            points: points

        })
    };

    render() {
        // console.log('render');
        return (
            <SafeAreaView style={HomeStyles.con}>
                {
                    this.state.popup ? <MyModal restart={this.restart} text1='Вы набрали очередные 100 очков!'
                                                text2='получить бонус 10 очков'/> : null
                }
                <MyScore title={this.state.score}/>
                <View>
                    <ScrollView>
                        <View style={HomeStyles.container}>
                            {this.state.cats.map((item, k) =>
                                <TouchableOpacity key={k} onPress={() => {
                                    this.updateData(k)
                                }}>
                                    <Cat item={item}/>
                                </TouchableOpacity>)}
                        </View>
                    </ScrollView>
                </View>
                <View style={{backgroundColor: '#30d0fe'}}>
                    <Button
                        title="Restart"
                        color="#841584"
                        onPress={() => this.RestartGame()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
