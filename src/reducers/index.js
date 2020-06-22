export default (state, { type, payload }) => {
    switch (type) {
        case 'INVERSE_MOBILE':
            return {
                ...state,
                mobile: !state.mobile,
            }
        case 'SET_SIZE':
            return {
                ...state,
                mobileSize: payload.size,
            }
        default:
            return state
    }
}
