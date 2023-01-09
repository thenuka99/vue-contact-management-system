<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magnam
          blanditiis sunt commodi nostrum velit fugit veritatis quisquam cumque
          nesciunt tenetur est consequuntur, voluptatibus amet ex quam
          inventore! Obcaecati, nisi.
        </p>
      </div>
    </div>
    <div class="row align-items-center flex-lg-row">
      <div class="col-md-4">
        <div class="row">
          <img
            :src="contact.photo"
            alt=""
            class="contact-img-big"
          />
        </div>
        <router-link to="/">
        <button class="btn btn-success mt-3">
           <i class="fa fa-arrow-left"></i> Back
        </button>
      </router-link>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <ul class="list-group">
            <li class="list-group-item">
              Name : <span class="fw-bold">{{contact.name}}</span>
            </li>
            <li class="list-group-item">
              Email : <span class="fw-bold">{{contact.email}}</span>
            </li>
            <li class="list-group-item">
              Mobile : <span class="fw-bold">{{ contact.mobile}}</span>
            </li>
            <li class="list-group-item">
              Company : <span class="fw-bold">{{ contact.company}}</span>
            </li>
            <li class="list-group-item">
              Title : <span class="fw-bold">{{contact.title}}</span>
            </li>
            <li class="list-group-item">
              Group : <span class="fw-bold">{{contact.group.name}}</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/Services/ContactService';
export default {
  name: "ContactProfile",
  data(){
    return{
      contactId:this.$route.params.contactId,
      contact: {
        name: "",
        email: "",
        mobile: "",
        title: "",
        photo: "",
        groupId: "",
        company: "",
        group:{},
      },
      errorMsg:""
    }
  },
  created: async function(){
    try {
      let response = await ContactService.getContact(this.contactId);
      let groupResponse =await ContactService.getGroup(response.data.groupId);
      console.log(response,groupResponse)
      this.contact= response.data;
      this.contact.group= groupResponse.data;
    } catch (error) {
      this.errorMsg=error;
    }
  },
};
</script>

<style>
</style>