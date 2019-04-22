import React from "react";
import {Button, View, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import MyModal from '../uikit/MyModal';
import {HomeStyles} from "../../style/Style"
import {navHome} from "../../style/Navigation";
import {changeScore, newScore, restartGame} from "../../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MyScore from "../uikit/MyScore";
import Cat from "../uikit/Cat";
import {algoCats, verification} from "./func/algo";

let arrCats = []

class HomeScreen extends React.Component {
    state = {
        points: 0,
        popup: false
    };
    static navigationOptions = navHome
    restart = () => {
        this.setState({popup: false})
    }

    RestartGame() {
        this.props.restart()
        this.setState({
            points: 0,
            popup: false
        })
    }

    updateData = (row, column) => {
        arrCats.push({
            row: row,
            column: column
        })
        if (arrCats.length == 2) {
            let verific = verification(arrCats)
            console.log("verification", verific)
            if (verific == false){
                arrCats = []
                return
            }
            let ct = [...this.props.cats]
            let newCats = algoCats(arrCats, ct)
            arrCats = []
            if (newCats == false)
                return
            let points = this.state.points + (newCats.score * 10)
            console.log("points", points)
            let score = this.props.score + (newCats.score * 10)
            if (points >= 100) {
                this.setState({popup: true, points: 0})
                score += 10
            } else
                this.setState({points: points})
            this.props.newScore({score: score, cats: newCats.cats})
        }
    };

    render(message) {
        return (
            <SafeAreaView style={HomeStyles.con}>
                {
                    this.state.popup ? <MyModal restart={this.restart} text1='Вы набрали очередные 100 очков!'
                                                text2='получить бонус 10 очков'/> : null
                }
                <MyScore title={this.props.score}/>
                <View>
                    <ScrollView>
                        <View style={HomeStyles.container}>
                            {
                                this.props.cats.map((item, r) => {
                                    let row = item.map((item1, column) => {
                                        return (
                                            <TouchableOpacity key={column} onPress={() => {
                                                this.updateData(r, column)
                                            }}>
                                                <Cat item={item1}/>
                                            </TouchableOpacity>)
                                    })
                                    return (
                                        <View style={HomeStyles.catcontainer} key={r}>
                                            {row}
                                        </View>)
                                })
                            }
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

//put state to props
const mapStateToProps = (state) => {
    // console.log("state mapStateToProps HomeScreen,", state)
    return {
        score: state.score,
        cats: state.cats
    }
}

//save & put actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        changeScore: bindActionCreators(changeScore, dispatch),
        newScore: bindActionCreators(newScore, dispatch),
        restart: bindActionCreators(restartGame, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);