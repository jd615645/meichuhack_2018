<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="container">
                    <div v-for="(item, i) in JSON.parse(order.list)"
                    :key="i"
                    class="row">
                        <div class="col">
                            <p> {{ item.name }} </p>
                        </div>
                        <div class="col">
                            <p> {{ item.price }} </p>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>
                    Price:
                </p>
                <p>
                    {{ total }}
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      total: 0
    };
  },
  created() {
    this.total = this.countPrice()
  },
  methods: {
    countPrice() {
      let items = JSON.parse(this.order.list);
      return items.reduce((carry, item) => carry + item.price, 0);
    }
  }
};
</script>

