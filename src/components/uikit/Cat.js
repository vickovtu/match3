import React from 'react';
import {Image} from 'react-native'


const Cat = (props) => {
    // console.log(this.state.caty)
    switch (props.item) {
        case 'cat0':
            return (
                <Image source={require('../img/cat0.png')} style={{width: 50, height: 50}}/>
            )
        case 'cat1':
            return (
                <Image source={require('../img/cat1.png')} style={{width: 50, height: 50}}/>
            )
        case 'cat2':
            return (
                <Image source={require('../img/cat2.png')} style={{width: 50, height: 50}}/>
            )
        case 'cat3':
            return (
                <Image source={require('../img/cat3.png')} style={{width: 50, height: 50}}/>
            )
        case 'cat4':
            return (
                <Image source={require('../img/cat4.png')} style={{width: 50, height: 50}}/>
            )
        case 'cat5':
            return (
                <Image source={require('../img/cat5.png')} style={{width: 50, height: 50}}/>
            )
    }

}

export default Cat