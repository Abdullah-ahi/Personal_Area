export function logger(store){
  return function wrapDispatch (next){
      return function dispatchAndLog(action){
          console.log('prevState', store.getState().area.toJS());

          const result = next(action)
          console.log('nextState', store.getState().area.toJS());
          return result
      }
  }
}