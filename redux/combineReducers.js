export default function combineReducers(reducers) {

  const reducerKeys = Object.keys(reducers)

  return function combination (state = {}, action) {
    const nextState = {}

    reducerKeys.forEach(key => {
      nextState[key] = reducers[key](state[key], action)
    })

    return nextState
  }
}