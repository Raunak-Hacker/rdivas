<template>
    <section class="filterTops">
        <div class="box mb">
            <div class="title">
                Tops
            </div>
            <div class="content">
                <ul>
                    <li><small> <a href="">Top </a></small></li>
                    <li><small> <a href="">Sports Wear </a></small></li>
                    <li><small> <a href="">T- Shirt </a></small></li>
                    <li><small> <a href="">Winter Wear </a></small></li>
                </ul>
            </div>
        </div>
        <div class="box ">
            <div class="title">
                <p>Color</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
        <div class="box b2">
            <div class="title">
                <p>Size</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
        <div class="box">
            <div class="title">
                <p>Price</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
        <div class="box b2">
            <div class="title">
                <p>Fabric</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
        <div class="box">
            <div class="title">
                <p>Work</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
        <div class="box b2">
            <div class="title">
                <p>Design</p> <img src="@/assets/plus.svg" alt=""/>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.filterTops {
    width: 25%;
    padding: 1%;
    /* border: 1px solid black; */
}

.box {
    width: 100%;
    height: 20%;
    background-color: rgba(119, 119, 119, 0.079);
}

.mb {
    margin-bottom: 3vh;
}

.title {
    padding: 3.5%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.06);
    display: flex;
    justify-content: space-between;
}
.title img {
    width: 4%;
    /* height: 5%; */
}

.b2 {
    background-color: rgba(128, 128, 128, 0.16);

}

.content {
    padding: 3% 5%;
    
} 
a{
    color: rgba(128, 128, 128, 0.848);
    font-weight: light;
}
</style>