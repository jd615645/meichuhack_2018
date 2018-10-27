<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <h1>
                You have ordered
                </h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <order-list :orders="orders"></order-list>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    props: ['orders'],
    mounted(){
    }
};
</script>

