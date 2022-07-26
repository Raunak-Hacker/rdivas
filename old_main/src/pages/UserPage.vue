<template>
    <section class="user-page">
        <div class="box name">
            <div class="card">
                <div class="in-box">
                    <label for="name">Name</label>
                    Raunak Sadhwani
                </div>
                <div class="in-flex">
                    <small>edit?</small>
                </div>
            </div>
        </div>
        <div class="box phone">
            <div class="card">
                <div class="in-box">
                    <label for="Phone">Phone</label>
                    +91 8888888888
                </div>
                <div class="in-flex">
                    <small>edit?</small>
                </div>
            </div>
        </div>

        <div class="box bio">
            <div class="card">
                <div class="in-box">
                    <label for="Email">Email</label>
                    raunak@gmail.com
                </div>
                <div class="in-flex">
                    <small>edit?</small>
                </div>
            </div>
        </div>

        <div class="box address">
            <div class="card">
                <div class="in-box add">
                    <label for="Email">Address</label>
                    <div class="addresses">
                        <div class="in-address">
                            <div class="full-add">
                               <p> raunak@gmail.comdsdsssdfsssssssssssssssss</p>
                            </div>
                        </div>
                        <div class="in-address">
                            <div class="full-add">
                               <p> raunak@gmail.comdsdsss</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="in-flex">
                    <small>edit?</small>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {


}
</script>

<style scoped>
.user-page {
    height: 89vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
}

.box {
    width: 100%;
    height: 20%;
    padding: 2% 0%;
}

.address {
    height: 40%;
}

.card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

label {
    font-size: larger;
    font-weight: bold;
}

.in-box {
    width: 35%;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
}

.add {
    width: 85%;
    height: 100%;
}

.add label {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}

.addresses {
    width: 80%;
    height: 100%;
    display: flex;
}

.in-address {
    width: 30%;
    height: 100%;
    padding: 2.5%;
    border: 1px solid black;
}

.full-add, p {
    width: 100%;
    overflow: hidden;
}

.in-flex {
    width: 10%
}

.in-flex small {
    text-decoration: underline;
}
</style>