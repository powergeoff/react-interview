const Reducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return {
                ...state,
                active: !state.active
            }
        default:
            return state
    }
}

export default Reducer;