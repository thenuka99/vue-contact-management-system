import { ContactService } from "@/Services/ContactService";

export default {
    namespaced: true,
    state: {
        contactsList: {
            contacts:[],
            errorMessage:"",
            isLoading:false,
            // isUpdating:false,
            // isDeleting:false,
            // isCreating:false
          },
    },
    mutations: {
        SET_LOADING: function(state,payload){
            state.contactsList.isLoading = payload;
        },
        SET_CONTACTS: function (state, payload) {
            state.contactsList.contacts= payload.contacts;
        },
        SET_ERROR: function (state, payload) {
            state.contactsList.errorMessage = payload.error
        },
    },
    actions: {
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
                console.log(response)
            } catch (error) {
                console.log(error)
                commit("SET_ERROR", {error: error})
            }
        },
        updateContact: async function({commit},id,contact){
            try {
                let response = await ContactService.updateContact(contact,id);
                console.log(response)
            } catch (error) {
                console.log(error)
                commit("SET_ERROR", {error: error})
            }
        },
        createContact: async function({commit},contact){
            try {
                let response =await ContactService.createContact(contact);
                console.log(response)
            } catch (error) {
                console.log(error)
                commit("SET_ERROR", {error: error})
            }
        }
    }
}