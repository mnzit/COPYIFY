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
        case 'INVERSE_PLAYING':
            return {
                ...state,
                playing: !state.playing,
            }
        case 'INVERSE_LIKED':
            return {
                ...state,
                liked: !state.liked,
            }
        case 'SET_CLICKED_LIKE':
            return {
                ...state,
                clickedLike: payload.clickedLike,
            }
        default:
            return state
    }
}
