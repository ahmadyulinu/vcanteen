<template>
  <div class="cart">
    <Navbar :updateCart="carts" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb"></nav>
        </div>
      </div>

      <div v-if="carts.length === 0">
        <div class="row">
          <div class="col text-center">
            <h1>Hey! Your cart is still empty!</h1>
            <router-link
              class="btn btn-lg btn-warning mt-4"
              name="pesan"
              to="/foods"
            >
              Order now
              <b-icon-arrow-right></b-icon-arrow-right>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row" v-if="carts.length != 0">
        <div class="col">
          <h2><strong>My</strong> Cart</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="index">
                  <th>{{ index + 1 }}</th>
                  <td class="text-center">
                    <img
                      :src="'/img/' + cart.products.gambar"
                      class="img-fluid rounded shadow"
                      style="height: 140px; width: 160px;"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.nama }}</strong>
                  </td>
                  <td>{{ cart.desc ? cart.desc : "-" }}</td>
                  <td>{{ cart.order_a }}</td>
                  <td>Rp. {{ cart.products.harga }}</td>
                  <td>
                    <strong>Rp.</strong>
                    {{ cart.products.harga * cart.order_a }}
                  </td>
                  <td class="text-center text-danger">
                    <b-icon-trash
                      @click="deleteCart(cart.id)"
                      style="cursor: pointer"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Price: </strong>
                  </td>
                  <td><strong>Rp.</strong> {{ total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="textcenter">
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="carts.length != 0">
        <div class="col-md-5">
          <h2>All done? Checkout here</h2>
          <form v-on:submit.prevent class="checkout-form">
            <div class="form-group">
              <label for="name" style="font-weight: bold">Name</label>
              <input
                type="text"
                class="form-control"
                value="1"
                v-model="pesan.name"
              />
            </div>
            <div class="form-group">
              <label for="nim" style="font-weight: bold">NIM</label>
              <input
                type="text"
                class="form-control"
                value=""
                v-model="pesan.nim"
              />
            </div>
            <div class="formgroup">
              <label for="jurusan" style="font-weight: bold">Majors</label>
              <textarea
                name="major"
                class="form-control"
                id="major"
                v-model="pesan.jurusan"
              ></textarea>
            </div>
            <div class="mt-3 checkbox-container">
              <h6 style="font-weight:bold;" class="mb-2">Payment Methods</h6>
              <div class="form-check-inline mt-2">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="payment_method"
                    value="gopay"
                  /><img src="/img/gopay.png" class="checkout-img" />
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="payment_method"
                    value="dana"
                  /><img src="/img/dana.png" class="checkout-img" />
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-warning mt-3"
              @click="checkout"
            >
              Confirm <b-icon-check></b-icon-check>
            </button>
          </form>
        </div>
        <img src="" alt="" />

        <div class="col-md-5">
          <img
            src="../assets/img/checkout.svg"
            width="80%"
            class="float-right checkout-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
      pesan: {},
    };
  },
  methods: {
    setCart(data) {
      this.carts = data;
    },
    deleteCart(id) {
      axios.delete("http://localhost:3000/cart/" + id).then(() => {
        this.$toast.error("Order deleted succesfully", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });

        axios
          .get("http://localhost:3000/cart/")
          .then((response) => {
            // handle success
            this.setCart(response.data);
            console.log("Success");
          })
          .catch(function(error) {
            // handle error
            console.log("gagal", error);
          });
      });
    },

    checkout() {
      if (this.pesan.name && this.pesan.nim && this.pesan.jurusan) {
        this.pesan.carts = this.carts;
        axios.post("http://localhost:3000/pesanan", this.pesan).then(() => {
          // Hapus Semua Keranjang
          this.carts.map(function(item) {
            return axios
              .delete("http://localhost:3000/cart/" + item.id)
              .catch((error) => console.log(error));
          });
          this.$router.push({ path: "/success" });
          this.$toast.success("Food ordered successfully, please wait.", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        });
      } else {
        this.$toast.error("All data is required to proceed", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
      console.log(this.pesan);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart/")
      .then((response) => {
        // handle success
        this.setCart(response.data);
        console.log("Success");
      })
      .catch(function(error) {
        // handle error
        console.log("gagal", error);
      });
  },
  computed: {
    total() {
      return this.carts.reduce(function(items, data) {
        return items + data.products.harga * data.order_a;
      }, 0);
    },
  },
};
</script>

<style></style>
