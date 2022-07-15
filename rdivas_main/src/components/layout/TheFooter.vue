<template>
    <footer>
        <div class="flex-box">
            <div class="about">
                <h1>RDIVAS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, libero non euismod
                    finibus, metus enim cursus enim, vitae dignissim orci ligula et mauris. </p>
            </div>
            <div class="links">
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>
                        <router-link to=""> About </router-link>
                    </li>
                    <li>
                        <router-link to=""> Blogs </router-link>
                    </li>
                    <li>
                        <router-link to=""> FAQ </router-link>
                    </li>
                    <li>
                        <router-link to=""> Contact </router-link>
                    </li>
                </ul>
            </div>
            <div class="account">
                <h4>ACCOUNT</h4>
                <ul>
                    <li>
                        <router-link to=""> My Account </router-link>
                    </li>
                    <li>
                        <router-link to=""> Orders Tracking </router-link>
                    </li>
                    <li>
                        <router-link to="/cart"> Checkout </router-link>
                    </li>
                    <li>
                        <router-link to=""> Wishlist </router-link>
                    </li>
                </ul>
            </div>
            <div class="social">
                <h4>NEWSLETTER</h4>
                <form action="">
                    <input type="email" maxlength="50" required placeholder="Email">
                    <button class="bt">Subscribe</button>
                </form>
                <div class="soc-icons">
                    <router-link to="#"> <i class="bx bxl-facebook"/> </router-link>
                    <router-link to=""> <i class="bx bxl-instagram"/> </router-link>
                    <router-link to=""> <i class="bx bxl-twitter"/> </router-link>
                    <router-link to=""><i class="bx bxl-pinterest"/> </router-link>
                    <router-link to=""> <i class="bx bxl-youtube"/> </router-link>
                </div>
            </div>
        </div>
        <div class="copyright">
            <small> RDivas &copy; 2022 All Rights Reserved</small>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    font-family: "montserrat", sans-serif;
    line-height: 2rem;

}

footer {
    height: 50vh;
    width: 100%;
    padding: 3.5% 12%;
}

.flex-box {
    height: 95%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.287);
    align-items: flex-start;
}

ul {
    display: block;
}

li {
    padding: 0;
}

.copyright {
    text-align: center;
    margin-top: 1.5%;
    color: gray;
    font-family: 'montserrat', sans-serif;
    font-size: medium;
}

h4 {
    text-transform: uppercase;
    /* margin-bottom: 1.5rem; */
}

p {
    line-height: normal;
    font-size: small;
    color: gray;
    margin-top: 1rem;

}

.about h1 {
    margin-top: 0.5rem;
}

.about {
    width: 33%;
    padding-right: 10%;
}

.social {
    width: 33%;
}

.links {
    width: 17%;
}

.account {
    width: 17%;
}

input {
    width: 60%;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 3.2rem;
    border-radius: 20px;
    border: none;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.04);
    outline: 0;
    padding-left: 1rem;
    border: 1px solid #e1e1e1;
}

.bt {
    font-size: 14px;
    display: inline-block;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #48B774;
    color: #fff;
}

.soc-icons {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
    width: 70%;
}

.soc-icons img {
    margin-top: 25%;
    width: 50%;
    height: 50%;
}
i {
    margin-top: 9%;
    font-size: 1.5rem;
}
a{
    color: #000;
}

.soc-icons a {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    background: #e1e1e1;
    color: #111111;
    text-align: center;
    border-radius: 50%;
}
</style>