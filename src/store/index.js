import { createStore } from 'vuex'
import contactModule from './modules/contact.module'

export default createStore({
  state: {
    contactState : contactModule.state
  },
  getters: {
    getContactState: function(state){
      return state.contactState.contacts
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contactModule
  }
})
