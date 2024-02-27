<script setup>
import ProfitDisplay from '@/components/ProfitDisplay.vue';
</script>

<template>
    <h3>This is profit page</h3>
    <ProfitDisplay/>
</template>

<script>

export default {
    name: 'OnlyProfit',
    components:{
        ProfitDisplay
    }
}
</script>