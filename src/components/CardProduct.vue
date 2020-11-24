<template>
  <div class="card shadow">
    <img
      class="card-img-top"
      :src="'/img/' + product.gambar"
      style="height: 260px; text-align:center;"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <h6 class="card-text">
        Rp. <b>{{ product.harga }}</b>
      </h6>
      <p class="card-text">
        <router-link :to="'/foods/' + product.id" class="btn btn-md btn-warning"
          >Add to cart <b-icon-cart></b-icon-cart
        ></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>

</style>
