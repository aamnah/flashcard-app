// Libs
import {createStore} from 'redux'

// Components

// Styles
require('./styles.scss')

// Render

console.log('bonjour! ca va?')


// STORE
// .createStore(reducer, [preloadedState], [enhancer]) 
// .createStore(function(state, action) {})
// let's you create a store that holds the complete state tree of your app. there should only be a signle store in your app
const store = createStore(function(state, action) {

  // make a change to the state based on the action
  switch(action.type) {
    // if action.type is ADD_CARD
    case 'ADD_CARD': 
      // create a newCard object
      let newCard = Object.assign({}, action.data, { // take a fresh empty object, and add action.data
        score: 1,
        id: +new Date // the unary + operator here will take a Date object (a single moment in time) and convert it to a number. Good lazy way to always get unique IDs
      }) 

      // you have a new card, return the updated state for the app
      return Object.assign({}, state, { 
        // if state.cards exists, concat the new card to a new cards array
        // if state.cards is false, just add an array with newCard in it
        // .concat returns a new array, so we're not mutating // we know it's an array becasue we set it as default
        cards: state.cards ? state.cards.concat([newCard]) : [newCard]
      }) 

    default:
      // when page is first loaded (score hasn't been added), state is going to be undefined
      // if state is undefined (falsy), return an empty Object
      return state || {} 
  }

})

// SUBSCRIBE
// how do we know state has changed? add a change listener! It will be called any time an action is dispatched
store.subscribe(() => {
  console.log(store.getState())
})

// DISPATCH 
// send the store an action 
store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
})