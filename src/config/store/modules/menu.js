
const state = {
    isMenuVisible: true,
}

const mutations = {
    setMenu(state, isVisible) {
        if (isVisible === undefined) {
            state.isMenuVisible = !state.isMenuVisible
        } else {
            state.isMenuVisible = isVisible
        }
    },
}

const actions = {
    toggleMenu({ commit }, isVisible) {
        commit('setMenu', isVisible)
    }
}

const getters = {
    isMenuVisible: state => state.isMenuVisible
}

export default {
    state,
    mutations,
    actions,
    getters
}
