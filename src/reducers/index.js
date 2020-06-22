export default (state, { type, payload }) => {
    switch (type) {
        case 'INVERSE_MOBILE':
            return {
                ...state,
                mobile: !state.mobile,
            }
        case 'SET_SIZE':
            console.log(`size in SET_SIZE ${payload.size}`)
            return {
                ...state,
                size: payload.size,
            }
        default:
            return state
    }
}
