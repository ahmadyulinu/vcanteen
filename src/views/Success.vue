<template>
  <div class="success">
    <Navbar />
    <div class="container text-center">
      <div class="row mt-5">
        <div class="col">
          <img
            src="../assets/img/confirmed.svg"
            class="img-fluid"
            style="width: 40%"
          />
          <h1 class="mt-4">
            Congratulations! Delicious food is coming your way.
          </h1>
          <h2>
            A detailed receipt will be sent to your email address.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";

export default {
  name: "Success",
  components: {
    Navbar,
  },
};
</script>

<style></style>
