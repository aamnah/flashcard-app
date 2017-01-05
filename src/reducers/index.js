import { combineReducers } from 'redux'
import {
  ADD_CARD,
  ADD_DECK,
  SHOW_ADD_DECK,
  HIDE_ADD_DECK
} from '../constants'

// Reducers
const cards = (state = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      let newCard = Object.assign({}, action.data, {
        id: +new Date
      })
      return state.concat(newCard)
    default:
      return state
  }
}

const decks = (state = [], action) => {
  switch(action.type) {
    case ADD_DECK:
      let newDeck = {
        id: +new Date,
        name: action.data
      }
      return state.concat(newDeck)
    default:
      return state
  }
}

const addingDeck = (state = false, action) => {
  switch(action.type) {
    case SHOW_ADD_DECK: return true
    case HIDE_ADD_DECK: return false
    default: return state
  }
}

const reducer = combineReducers({
  cards,
  decks,
  addingDeck
})
export default reducer