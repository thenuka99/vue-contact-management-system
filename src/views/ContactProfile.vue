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
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
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
              Name : <span class="fw-bold">Name</span>
            </li>
            <li class="list-group-item">
              Email : <span class="fw-bold">Email</span>
            </li>
            <li class="list-group-item">
              Mobile : <span class="fw-bold">Mobile</span>
            </li>
            <li class="list-group-item">
              Company : <span class="fw-bold">Company</span>
            </li>
            <li class="list-group-item">
              Title : <span class="fw-bold">Title</span>
            </li>
            <li class="list-group-item">
              Group : <span class="fw-bold">Group</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactProfile",
};
</script>

<style>
</style>