import axios from "axios";

export class ContactService{
    static serverURL = 'http://localhost:3000';

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }
    static getContact(contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.get(dataURL);
    }
    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL,contact);
    }
    static updateContact(contact,contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.put(dataURL,contact);
    }
    static deleteContact(contactID){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.delete(dataURL);
    }
    static getAllGroups(){
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }
    static getGroup(groupID){
        let dataURL = `${this.serverURL}/groups/${groupID}`;
        return axios.get(dataURL);
    }
}