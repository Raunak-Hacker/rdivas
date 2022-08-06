<template>
  <section class="login">
    <div class="login-card">
      <div class="sign-in">
        <div class="dets">
          <h1 style="color: white">New Here?</h1>
          <p style="color: white">
            <br />
            Sign up and discover many ongoing offers on best quality products!
            <br />
            <br />
            Register now to access features like wishlist, cart, etc. <br />
            <br />
          </p>
          <router-link to="/register"
            ><button
              class="button-37"
              style="background-color: white; color: black; font-weight: bolder"
            >
              Sign Up
            </button></router-link
          >
        </div>
      </div>
      <div class="info">
        <div class="img">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="details">
          <div class="title">
            <h1>Login to Your Account</h1>
          </div>
          <br />
          <form action="POST" @submit.prevent="subForm">
            <input type="email" placeholder="email" v-model.trim="email" /> <br />
            <input type="password" placeholder="password" v-model.trim="password" />
            <br />
            <p v-if="authError">{{ authMessage }}</p>
            <router-link to=""><small>Forgot Password?</small></router-link> <br />
            <button class="button-37" role="button">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {
    authMessage() {
      return this.$store.getters.authMessage;
    },
    authError() {
      return this.$store.getters.authError;
    },
  },

  methods: {
    async subForm() {
      const user = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("login", user);
      if (this.authError) {
        return;
      }
      window.location = "/home";
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 89vh;
  width: 35%;
  background-color: var(--left-login);
}

.login-card {
  width: 75%;
  height: 75%;
  position: absolute;
  display: flex;
  left: 10%;
  top: 18%;
  box-shadow: 18px 18px 50px 30px rgba(0, 0, 0, 0.15);
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

.info a small {
  color: rgb(0, 94, 202);
}

.info {
  width: 66.8%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  color: var(--left-login);
}

.info a {
  display: flex;
  justify-content: flex-end;
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
  object-fit: contain;
}

input {
  width: 50%;
  height: 3rem;
  border: none;
  background-color: rgba(163, 163, 163, 0.11);
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
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
  font-weight: bolder;
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .login-card {
    flex-direction: column-reverse;
    width: 80%;
    height: max-content;
  }
  .login {
    width: 100%;
    height: 19rem;
    margin-top: 25rem;
  }
  .sign-in {
    height: 33.2%;
    width: 100%;
    padding: 1rem 0;
  }
  input {
    width: 80%;
    height: 3rem;
    font-size: 0.9rem;
  }
  .info {
    width: 100%;
    height: 66.8%;
    padding: 0 0 7% 0;
  }
  h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .dets p {
    font-size: 0.75rem;
  }
  .dets h1 {
    font-size: 1.75rem;
  }
  .img img {
    width: 23%;
  }
}

</style>
