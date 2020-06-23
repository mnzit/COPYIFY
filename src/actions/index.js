export const inverseMobile = () => ({
    type: 'INVERSE_MOBILE',
})

export const inversePlaying = () => ({
    type: 'INVERSE_PLAYING',
})

export const setWidth = (width) => ({
    type: 'SET_WIDTH',
    payload: {
        width: width,
    },
})

export const setHeight = (height) => ({
    type: 'SET_HEIGHT',
    payload: {
        height: height,
    },
})
