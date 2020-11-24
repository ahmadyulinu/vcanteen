<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="aos">
        <div class="row mt-5">
        <div class="col mt-5" data-aos="fade-up">
          <h2>Our <strong>best food</strong></h2>
        </div>
        <div class="col mt-5"  data-aos="fade-up">
          <router-link class="btn btn-lg btn-warning float-right" to="/foods"
            ><b-icon-eye></b-icon-eye> See all</router-link
          >
        </div>
      </div>

      <div class="row mb-3" data-aos="fade-up">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best_products")
      .then((response) => {
        // handle success
        this.setProduct(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log("gagal", error);
      });
  },
};
</script>
<style>
</style>
