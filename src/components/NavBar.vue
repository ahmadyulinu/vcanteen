<template>
<div class="container">
  <b-navbar toggleable="lg" type="light" variant="light" class="shadow" style="z-index: 1">
    <router-link to="/" style="font-weight: lighter;"><b-navbar-brand>Vokasi Canteen</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="" class="nav-link" v-if="!$auth.isAuthenticated" @click="login" style="color: black">Sign in</a>
            <a href="" class="nav-link" v-if="$auth.isAuthenticated" @click="logout" style="color: black;">Sign out</a>
          </li>
          <li class="nav-item" v-if="$auth.isAuthenticated">
            <router-link class="nav-link" to="/cart">
              <b-icon-cart style="color: #2F2E41"></b-icon-cart>
              <span class="badge badge-warning ml-2">
                {{ updateCart ? updateCart.length : order_a.length }}
              </span>
            </router-link>
          </li>
          

        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
  <!-- <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <a class="navbar-brand" href="#">Vokasi Canteen</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <b-icon-cart style="color: #2F2E41"></b-icon-cart>
              <span class="badge badge-warning ml-2">
                {{ updateCart ? updateCart.length : order_a.length }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      order_a: {},
    };
  },
  props: ["updateCart"],
  methods: {
    setJumlah(data) {
      this.order_a = data;
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart/")
      .then((response) => {
        // handle success
        this.setJumlah(response.data);
        console.log("Success");
      })
      .catch(function(error) {
        // handle error
        console.log("gagal", error);
      });
  },
};
</script>

<style>
a {
  color: #ffb519;
}
</style>
