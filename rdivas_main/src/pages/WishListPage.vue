<template>
    <section class="wishlist">
        <h1>Wish List</h1>
        <div class="flex-wrap">
            <cloth-card disc="true" />
            <cloth-card />
            <cloth-card newProd="true" />
            <cloth-card />
            <cloth-card disc="true" />
            <cloth-card />
            <cloth-card disc="true" />
            <cloth-card />
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.wishlist {
    width: 100%;
    padding: 3% 10%;
    display: flex;
    flex-direction: column;
}

.wishlist h1 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
</style>