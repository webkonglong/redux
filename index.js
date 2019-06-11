import { createStore, combineReducers } from './redux'

import counterReducer from './reducers/counter'
import infoReducer from './reducers/info'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})


const store = createStore(reducer)


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: 'abcdefg'
}