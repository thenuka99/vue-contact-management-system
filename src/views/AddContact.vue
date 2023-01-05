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
          <form action="" class="form mt-4">
            <div class="row">
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control my-1"
                  placeholder="Name"
                />
                <input
                  type="email"
                  class="form-control my-1"
                  placeholder="Email"
                />
                <input
                  type="text"
                  class="form-control my-1"
                  placeholder="Image URL"
                />
                <input
                  type="number"
                  class="form-control my-1"
                  placeholder="Mobile"
                />
                <input
                  type="text"
                  class="form-control my-1"
                  placeholder="Company"
                />
                <input
                  type="text"
                  class="form-control my-1"
                  placeholder="Title"
                />
                <select name="" id="" class="form-control my-1 mb-2">
                  <option value="">Select Group</option>
                </select>
                <input type="submit" value="Create" class="btn btn-success" />
              </div>
              <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "AddContact",
};
</script>

<style>
</style>