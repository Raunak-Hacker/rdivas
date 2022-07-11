<template>
  <section class="login pink">
    <div class="pink">
    </div>

    <div class="login-card">
      <div class="sign-in">
        <div class="dets">
          <h1 style="color:white;">New Here?</h1>
          <p style="color:white;">Sign up and discover many ongoing offers on best quality products!</p>
          <button class="button-37" style="background-color:white; color:black; font-weight:bolder" role="button">Sign
            Up</button>
        </div>
      </div>
      <div class="info">
        <div class="img">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="details">
          <div class="title">
            <h1>Login to Your Account</h1>
          </div> <br>
          <form action="">
            <input type="email" placeholder="email"> <br>
            <input type="password" placeholder="password"> <br>
            <router-link to=""><small>Forgot Password?</small></router-link> <BR></BR>
            <button class="button-37" role="button">LOGIN</button>
          </form>
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
.login {
  width: 100%;
  height: 89vh;
  background-color: rgba(119, 119, 119, 0.079);

}

.pink {
  width: 35%;
  background-color: var(--left-login);
}

.sign-in {
  width: 33.2%;
  height: 100%;
  background-color: var(--left-login);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dets {
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 1.5rem;
}

.login-card {
  width: 75%;
  height: 75%;
  position: absolute;
  display: flex;
  left: 10%;
  top: 18%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 18px 18px 50px 30px rgba(0, 0, 0, 0.15)
}

.info a small {
  color: rgb(0, 94, 202);
}

.info {
  width: 66.8%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  color: var(--left-login);
}

.info a {
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  align-items: flex-end;
  cursor: pointer;
}

.details {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

h1 {
  font-size: 2.2rem;
  font-weight: bold;
}

.img {
  padding: 2.5% 5% 0 0;
  width: 100%;
  height: 23%;
  display: flex;
  justify-content: flex-end;
}

.img img {
  width: 19%;
  height: 100%;
}

input {
  width: 50%;
  height: 3rem;
  border: none;
  background-color: rgba(163, 163, 163, 0.11);
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  outline: 0;
  text-indent: 10px;

}


form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


/* CSS */
.button-37 {
  background-color: var(--left-login);
  border: 1px solid var(--left-login);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: bolder
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}
</style>