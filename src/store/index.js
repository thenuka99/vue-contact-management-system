import { createStore, createLogger } from 'vuex'
import contactModule from './modules/contact'

const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  modules: {
    contactModule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
