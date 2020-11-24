<template>
  <!-- Desktop -->
  <div class="hero">
    <div class="d-md-block d-none">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious food</strong>, <br />just a tap away from your
                phone
              </h2>
              <p>The right place for any occasion. Order now!</p>
              <router-link
                class="btn btn-lg btn-warning"
                name="pesan"
                to="/foods"
              >
                Order now
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/hero.svg" style="width: 100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <img src="../assets/img/hero.svg" style="width: 100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious food</strong>, <br />Just a tap away from your
                phone
              </h2>
              <p>What're you waiting for? Order now!</p>
              <router-link class="btn btn-lg btn-warning" name="pesan" to="/">
                Order
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
