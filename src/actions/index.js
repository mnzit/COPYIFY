export const inverseMobileAction = () => ({
    type: 'INVERSE_MOBILE',
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
