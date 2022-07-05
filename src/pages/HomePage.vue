<template>
    <section class="homePage">
        <top-sec />
        <bottom-sec />
    </section>
</template>

<script>
import TopSec from '@/components/home/TopSec.vue';
import BottomSec from '@/components/home/BottomSec.vue';
export default {
    components: {  TopSec, BottomSec },

}
</script>

<style scoped>
/* .homePage {
    padding-top: 11vh;
} */
</style>