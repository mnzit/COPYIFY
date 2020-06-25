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
        case 'SET_PLAYER_COLOR':
            return {
                ...state,
                playerColor: payload.playerColor,
            }
        case 'SET_CURRENT_SONG':
            return {
                ...state,
                currentSong: payload.currentSong,
            }
        default:
            return state
    }
}
