<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magnam
          blanditiis sunt commodi nostrum velit fugit veritatis quisquam cumque
          nesciunt tenetur est consequuntur, voluptatibus amet ex quam
          inventore! Obcaecati, nisi.
        </p>
        <form @submit.prevent="submitCreate()" class="form mt-4">
          <div class="row">
            <div class="col-md-4">
              <input type="text" class="form-control my-1" v-model="contact.name"  placeholder="Name" />
              <input
                type="email"
                class="form-control my-1" v-model="contact.email"
                placeholder="Email"
              />
              <input
                type="text"
                class="form-control my-1" v-model="contact.photo"
                placeholder="Image URL"
              />
              <input
                type="number"
                class="form-control my-1" v-model="contact.mobile"
                placeholder="Mobile"
              />
              <input
                type="text"
                class="form-control my-1" v-model="contact.company"
                placeholder="Company"
              />
              <input
                type="text"
                class="form-control my-1" v-model="contact.title"
                placeholder="Title"
              />
              <select name="" id="" class="form-control my-1 mb-2" v-model="contact.groupId">
                <option value="">Select Group</option>
                <option :value="group.id" v-bind:key="group.id" v-for="group in groups">{{group.name}}</option>
              </select>

              <input type="submit" value="Create" class="btn btn-success" />
            </div>
            <div class="col-md-4">
              <img
                :src="contact.photo"
                alt=""
                class="contact-img"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ContactService } from '@/Services/ContactService';
export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        mobile: "",
        title: "",
        photo: "",
        groupId: "",
        company: "",
      },
      groups:[]
    };
  },
  created: async function(){
    try {
      let response = await ContactService.getAllGroups();
      console.log(response)
      this.groups= response.data; 
    } catch (error) {
      this.errorMsg=error;
    }
  },
  methods:{
    submitCreate :async function(){
      this.$store.dispatch("contactModule/createContact",this.contact)
      return this.$router.push("/");
    }
  }
};
</script>

<style>
</style>