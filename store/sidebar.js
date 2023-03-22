export const state = () => ({
    showType: Number
})

export const mutations = {
    setShowType(state, type) {
        state.showType = type
    }
}