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
