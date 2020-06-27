export const inverse = (item) => ({
    type: 'INVERSE',
    payload: {
        item,
    },
})

export const set = (item) => ({
    type: 'SET',
    payload: {
        item,
    },
})

export const setCurrentSong = (song) => ({
    type: 'SET_CURRENT_SONG',
    payload: {
        currentSong: song,
    },
})
