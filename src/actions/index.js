export const inverseMobileAction = () => ({
    type: 'INVERSE_MOBILE',
})

export const setMobileSize = (size) => ({
    type: 'SET_MOBILE_SIZE',
    payload: {
        size: size,
    },
})
