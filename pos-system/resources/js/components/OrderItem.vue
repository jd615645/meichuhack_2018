<template>
<div>
    <b-container>
        <b-row>
            <b-col>
                <b-container >
                    <b-row>
                        <b-col>
                            <h3>
                                List:
                            </h3>
    
                                <b-container>
                                    <b-row>
                                        <b-col><strong>Meal</strong></b-col>
                                        <b-col><strong>Price</strong></b-col>
                                        <b-col><strong>Options</strong></b-col>
                                    </b-row>
                                    <br>
                                    <b-row v-for="(item, i) in JSON.parse(order.list)"
                                :key="i">
                                        <b-col>
                                        <p> {{ item.name }} </p>
                                        </b-col>
                                        <b-col>
                                        <p> {{ item.price }} </p>
                                        </b-col>
                                        <b-col>
                                            <b-container>
                                                <b-row v-for="(k, v) in item.options" :key="v">
                                                    <b-col>{{ v }}</b-col>
                                                    <b-col>{{ k }}</b-col>
                                                </b-row>
                                            </b-container>
                                        </b-col>
                                    </b-row>
                                </b-container>                           
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <h3>
                                Total:
                            </h3>
                            <h2>
                            $ {{ total }}
                            </h2>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <b-container >
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
                            <b-row>
                                <b-col>
                                    <h3>Get money:</h3>
                                    <h2> $ {{ countPrice }}</h2>
                                </b-col>
                            </b-row>
                </b-container>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <b-container >
                    <b-row>
                        <b-col>
                            <h3>
                                You should pay back:
                            </h3>
                        </b-col>
                    </b-row>
                    <b-row v-show="countPrice > total">
                        <b-col>
                        <h4>
                            $ {{ countPrice - total }}
                        </h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-container>
                                <b-row v-for="(cnt, i) in change" :key="i">
                                    <b-col>
                                    <b-container v-show="cnt !== 0">
                                        <b-row v-for="(c, idx) in cnt" :key="idx">
                                            <b-col>
                                                <img :src="`../images/TWD${money[i]}.jpg`" alt=""> 
                                            </b-col>
                                        </b-row>
                                    </b-container>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                        <b-col>
                            <b-container>
                                <b-row v-for="(cnt, i) in change" :key="i" v-show="cnt !== 0">
                                    <b-col>
                                        <h4>${{ money[i] }}</h4>
                                    </b-col>
                                    <b-col>
                                        <h4>X{{ cnt }}</h4>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                    </b-row>

                </b-container>
            </b-col>
        </b-row>
    </b-container>
</div>
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
    }
  },
  computed: {
    countPrice() {
      let s = 0;
      for (let index = 0; index < this.money_dict.length; index++) {
        s += parseInt(this.money_dict[index]) * this.money[index];
      }
      return s;
    },
    change() {
      if (this.countPrice > this.total) {
        let diff = this.countPrice - this.total;
        let change_dict = new Array(this.money.length).fill(0);
        let i = this.money.length - 1;
        while (diff > 0) {
          if (diff >= this.money[i]) {
            while (diff >= this.money[i]) {
              change_dict[i]++;
              diff -= this.money[i];
            }
          }
          i--;
        }
        return change_dict;
      }
    }
  }
};
</script>

