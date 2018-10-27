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
                        <b-col>
                            <b-form-input
                            type="number"
                            v-model="money_dict[i]"
                            :value="money_dict[i]"
                            :min="0"
                            ></b-form-input>
                        </b-col>
                    </b-row>
                </b-container>
                <br>
                <b-button @click="change()" variant="primary">Change</b-button>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <p>Get money:</p>
                <p>{{ countPrice }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ["order"],
  data() {
    const money = [1, 5, 10, 50, 100, 500, 1000];
    let money_dict = new Array(money.length).fill("0");
    return {
      total: 0,
      money,
      money_dict,
      price: 0
    };
  },
  created() {
    this.total = this.countTotal();
  },
  methods: {
    countTotal() {
      let items = JSON.parse(this.order.list);
      return items.reduce((carry, item) => carry + item.price, 0);
    },
    change() {
      console.log(this.total);
    }
  },
  computed: {
    countPrice() {
      let s = 0;
      for (let index = 0; index < this.money_dict.length; index++) {
        s += parseInt(this.money_dict[index]) * this.money[index];
      }
      return s;
    }
  }
};
</script>

