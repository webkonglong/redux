export default function createStore(reducer, initState) {
  let state = initState
  const listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(item => {
      item()
    })
  }

  function getState() {
    return state
  }

  // 完全是为了初始化
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}