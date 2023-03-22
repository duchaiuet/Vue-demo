export const state = () => ({
    showType: 0
})

export const getShowType = {
    getShowType(state) {
        return state.showType
    }
}

export const mutations = {
    setShowType(state, type) {
        state.showType = type
    }
}

export const actions = {
}