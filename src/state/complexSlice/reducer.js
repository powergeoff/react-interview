

const ModelReducer = (state, action) => {
  switch (action.type) {
    case 'SETLOGIN':
        return {
            ...state,
            login: action.payload.login,
            validationStep: 1
        }
    case 'SETVALIDATIONSTEP':
      return {
          ...state,
          validationStep: action.payload.validationStep
      }
    default:
        return state
}
}
export default ModelReducer;
