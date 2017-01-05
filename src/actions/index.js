import {
  ADD_DECK,
  SHOW_ADD_DECK,
  HIDE_ADD_DECK
} from '../constants'

// Action Creators
const addDeck = (name) => ({ type: ADD_DECK, data: name })
const showAddDeck = () => ({ type: SHOW_ADD_DECK })
const hideAddDeck = () => ({ type: HIDE_ADD_DECK })