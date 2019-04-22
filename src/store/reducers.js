import {NEW_SCORE, PLUS_SCORE, RESTART_GAME} from "../constants/constans";
import {GenerateMap} from "../components/scrins/func/func";

//изначальное значение state
const initialState = {
    score: 0,
    cats: GenerateMap(),
}

//обработка actions (событий)
export const reducer = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case PLUS_SCORE:
            console.log("PLUS_SCORE")
            const v = state.score + parseInt(action.payload)
            return {...state, score: v}
        case NEW_SCORE:
            console.log("NEW_SCORE", action.payload)
            return {...state, score: action.payload.score, cats: action.payload.cats}
        case RESTART_GAME:
            console.log("RESTART_GAME")
            return {...state, score: 0, cats: GenerateMap()}


    }
    return state
}