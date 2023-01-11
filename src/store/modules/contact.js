import { ContactService } from "@/Services/ContactService";
import store from "..";

// initial state
const state = () => ({
    contactsList: {
        contacts:[],
        errorMessage:"",
        isLoading:false,
        contact:null,
        // isUpdating:false,
        // isDeleting:false,
        // isCreating:false
      },
  })
  
  // getters
  const getters = {
    getContactState: function (state) {
        return state.contactsList;
      }
  }
  
  // actions
  const actions = {
    getContacts: async function ({commit}) {
        try {
            commit("SET_LOADING",true);
            let response = await ContactService.getAllContacts();
            console.log(response)
            commit("SET_CONTACTS", {contacts: response.data});
            commit("SET_LOADING",false);
        } catch (error) {
            commit("SET_ERROR", {error: error});
            commit("SET_LOADING",false);
        }
    },
    deleteContact: async function({commit},id){
        try {
            let response = await ContactService.deleteContact(id);
            store.dispatch(this.getContacts)
            console.log(response)
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", {error: error})
        }
    },
    updateContact: async function({commit},contact){
        try {
            let response = await ContactService.updateContact(contact,contact.id);
            store.dispatch(this.getContacts)
            console.log(response)
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", {error: error})
        }
    },
    createContact: async function({commit},contact){
        try {
            let response =await ContactService.createContact(contact);
            store.dispatch(this.getContacts)
            console.log(response)
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", {error: error})
        }
    },
    getDetailedContact: async function({commit},id){
        try {
            let response = await ContactService.getContact(id);
            commit("SET_DETAILED_CONTACT", {contact: response.data})
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", {error: error})
        }
    }
  }
  
  // mutations
  const mutations = {
    SET_LOADING: function(state,payload){
        state.contactsList.isLoading = payload;
    },
    SET_CONTACTS: function (state, payload) {
        state.contactsList.contacts= payload.contacts;
    },
    SET_DETAILED_CONTACT: function(state,payload){
        state.contactsList.contact = payload.contact;
    },
    SET_ERROR: function (state, payload) {
        state.contactsList.errorMessage = payload.error;
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }