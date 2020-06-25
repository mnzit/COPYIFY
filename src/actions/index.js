export const inverseMobile = () => ({
    type: 'INVERSE_MOBILE',
})

export const inversePlaying = () => ({
    type: 'INVERSE_PLAYING',
})

export const inverseLiked = () => ({
    type: 'INVERSE_LIKED',
})

export const setWidth = (width) => ({
    type: 'SET_WIDTH',
    payload: {
        width: width,
    },
})

export const setPlayerColor = (color) => ({
    type: 'SET_PLAYER_COLOR',
    payload: {
        playerColor: color,
    },
})

export const setClickedLike = (clickedLike) => ({
    type: 'SET_CLICKED_LIKE',
    payload: {
        clickedLike: clickedLike,
    },
})

export const setHeight = (height) => ({
    type: 'SET_HEIGHT',
    payload: {
        height: height,
    },
})

export const setCurrentSong = (song) => ({
    type: 'SET_CURRENT_SONG',
    payload: {
        currentSong: song,
    },
})
