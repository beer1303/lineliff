export const state = () => ({
  dialog: {
    isShow: false,
    title: '',
    message: ''
  },
  form: {
    firsname: '',
        lastname: '',
        gender: 1,
  }
})

export const getters = {
  getRegister(){
    return state.register
  }
}

export const mutations = {
  SET_REGISTER(state, data){
    state.register = {
      ...state.register,
      ...data
    }
  }
}

export const actions = {
  setRegister({ comit }, data){
    commit('SET_REGISTER', data)
  }
}
