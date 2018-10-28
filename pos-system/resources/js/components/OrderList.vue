<template>
<div class="list-container">
      <b-card :title="`Order #${order.id}`"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          v-for="order in orders"
          :key="order.id"
          >
    <p class="card-text" v-for="(item, idx) in JSON.parse(order.list)" :key="idx">
      {{ item.name }}
    </p>
    <b-button :href="`order/${order.id}`" variant="primary">Go checked</b-button>
  </b-card>
</div>
</template>
<script>
export default {
  props: ["orders"],
  created() {
  },
  methods: {}
};
</script>

