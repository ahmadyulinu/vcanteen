<template>
  <div class="food">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Our <b>Menu</b></h2>
        </div>
      </div>

      <div class="row mt-3 text-center">
        <div class="col center-block">
          <div class="input-group mb-3 shadow" style="width: 60%; margin: auto">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              v-on:keyup="searchFood()" 
            />
            <div class="input-group-prepend edit">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3" data-aos="fade-up">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";




export default {
  name: "Food",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: '',
      count: 0,
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => {
        // handle success
        this.setProduct(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log("gagal", error);
      });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
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

<style></style>
