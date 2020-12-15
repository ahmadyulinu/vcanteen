<template>
  <div class="food-detail">
    <navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods">Food</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">Order Food</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <img
            :src="'/img/' + product.gambar"
            class="img-fluid shadow"
            style="border=radius: 15px;"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h2>
            Price: Rp. <strong>{{ product.harga }}</strong>
          </h2>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jum_pesan">Order amount</label>
              <input
                type="number"
                class="form-control"
                value="1"
                v-model="pesan.order_a"
              />
            </div>
            <div class="formgroup">
              <label for="ktr">Description</label>
              <textarea
                name="ktr"
                class="form-control"
                id="ktr"
                placeholder="Ex: Spicy, vegan"
                v-model="pesan.desc"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-warning mt-3 float-right"
              @click="pemesanan"
            >
              Confirm <b-icon-check></b-icon-check>
            </button>
          </form>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    
    pemesanan() {
      if (this.pesan.order_a) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/cart", this.pesan)
          .then(() => {
            this.$router.push({ path: "/foods" });
            this.$toast.success("Succesfully added to cart", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Order amount must be filled", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
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
