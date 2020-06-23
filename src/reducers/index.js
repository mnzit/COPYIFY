export default (state, { type, payload }) => {
    switch (type) {
        case 'INVERSE_MOBILE':
            return {
                ...state,
                mobile: !state.mobile,
            }
        case 'SET_WIDTH':
            return {
                ...state,
                mobileWidth: payload.width,
            }
        case 'SET_HEIGHT':
            return {
                ...state,
                mobileHeight: payload.height,
            }
        default:
            return state
    }
}