<template>
  <section class="login pink">
    <div class="pink">
    </div>
    <div class="login-card">
      <div class="info">
        <div class="img">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="details">
          <div class="title">
            <h1>Login to Admin Panel</h1>
          </div> <br>
          <form action="POST" @submit.prevent="subForm">
            <input type="email" placeholder="email" v-model.trim="email"> <br>
            <input type="password" placeholder="password" v-model.trim="password"> <br>
            <p v-if="authError">{{ authMessage }}</p> <br>
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
    }
  },
  computed: {
    host() {
      return this.$store.getters.logHost;
    },
    token() {
      return this.$store.getters.token;
    },
    authMessage() {
      return this.$store.getters.authMessage;
    },
    authError() {
      return this.$store.getters.authError;
    }
  },

  methods: {
    async subForm() {
      const user = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      }
      const tokenResponse = await fetch(`${this.host}login`, user);
      const token = await tokenResponse.json();
      if (!tokenResponse.ok) {
        const authErr = {
          message: "Invalid email or password",
          error: true,
        };
        this.$store.commit("setAuthError", authErr);
        return;
      } else if (token.token) {
        localStorage.setItem("token", token.token);
        this.$store.commit("setAuthError", { message: null, error: false });
        this.$store.dispatch("auth", token.token);
      }
    },
    // async auth(token) {
    //   const auth = await fetch(`${this.host}/user/`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   const authResponse = await auth.json();
    //   if (authResponse.status === "success") {
    //     // context.commit("setAuth", true);
    //     this.authMessage = null
    //     this.authError = false
    //     return;
    //   } else if (authResponse.message === "Unauthorized") {
    //     this.authMessage = "Invalid email or password"
    //     this.authError = true
    //     return this.logout();
    //   }
    // },
  },
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 89vh;
}

.pink {
  width: 35%;
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
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
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
  background-color: rgba(90, 90, 90, 0.062);
  border: none;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
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

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.card a {
  color: #0070f3;
  text-decoration: underline;
}
</style>