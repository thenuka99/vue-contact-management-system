<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i> New</router-link
          >
        </p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magnam
          blanditiis sunt commodi nostrum velit fugit veritatis quisquam cumque
          nesciunt tenetur est consequuntur, voluptatibus amet ex quam
          inventore! Obcaecati, nisi.
        </p>
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name"
                  />
                </div>
                <div class="col">
                  <input type="submit" value="Submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="" v-if="loading"><spin-loader-vue/></div>

  <div v-if="!loading && errorMsg" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ errorMsg }}</p>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="!loading && contacts">
    <div class="row">
      <div class="col-md-6" v-for="contact in contacts" v-bind:key="contact.id">
        <div class="card my-2 bg-secondary shadow-lg" >
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
              </div>
              <div class="col-sm-6">
                <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                  <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
                </ul>
              </div>
              <div class="col-sm-1  justify-content-center align-items-center">
                <router-link :to="`/contacts/profile/${contact.id}`" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <router-link to="/contacts/view/:cid" class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/Services/ContactService';
import SpinLoaderVue from '@/components/SpinLoader.vue';

export default {
  name: "ContactList",
  data(){
    return {
      loading : false,
      contacts:[],
      errorMsg:null
    }
  },
  created: async function(){
    try {
      this.loading=true;
      let response = await ContactService.getAllContacts();
      console.log(response)
      this.contacts= response.data;
      this.loading =false;      
    } catch (error) {
      this.errorMsg=error;
      this.loading=false;
    }
  },
  components:{
    SpinLoaderVue,
  }
};
</script>

<style>
</style>