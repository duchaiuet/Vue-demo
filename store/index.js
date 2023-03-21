export const state = () => ({
    showType: 0
})

export const getShowType = {
    getCounter(state) {
        return state.showType
    }
}

export const mutations = {
    setShowType(state, type) {
        state.showType = type
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}