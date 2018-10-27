<template>
    <b-container>
        <b-row>
            <b-col>
                <div v-for="(item, i) in JSON.parse(order.list)"
                :key="i"
                >
                <p> {{ item.price }} </p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['order'], 
    created(){
        console.log(this.order)
    }
}
</script>

