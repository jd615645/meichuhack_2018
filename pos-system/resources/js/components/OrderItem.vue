<template>
    <b-container>
        <b-row>
            <b-col>
                <p>
                    List:
                </p>
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
                    Total:
                </p>
                <p>
                    {{ total }}
                </p>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <b-container>
                    <b-row v-for="(m, i) in money" :key="i">
                        <b-col>
                           <img :src="`../images/TWD${m}.jpg`" alt=""> 
                        </b-col>
                    </b-row>
                </b-container>
                <br>
                <b-button @click="change()" variant="primary">Change</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      total: 0,
      money: [1, 5, 10, 50, 100, 500, 1000]
    };
  },
  created() {
    this.total = this.countPrice()
  },
  methods: {
    countPrice() {
      let items = JSON.parse(this.order.list);
      return items.reduce((carry, item) => carry + item.price, 0);
    },
    change(){
        console.log(this.total)
    }
  }
};
</script>

