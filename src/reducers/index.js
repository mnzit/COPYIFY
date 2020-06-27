export default (state, { type, payload }) => {
    switch (type) {
        case 'INVERSE': {
            const key = Object.keys(payload.item)[0]
            const newObj = { ...state }
            newObj[key] = !state[key]
            return newObj
        }
        case 'SET': {
            const key = Object.keys(payload.item)[0]
            const value = Object.values(payload.item)[0]
            const newObj = { ...state }

            newObj[key] = value
            return newObj
        }
        default:
            return state
    }
}
