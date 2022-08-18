<template>
  <section class="login">
    <div class="login-card">
      <div class="sign-in">
        <div class="dets">
          <h1 style="color: white" class="mob">
            Already have <br />
            an account? <br /><br />
          </h1>
          <h1 style="color: white" class="des">
            Already have <br /><br />
            an account? <br />
          </h1>
          <router-link to="/login" @click="signIn"
            ><button
              class="button-37"
              style="background-color: white; color: black; font-weight: bolder"
            >
              Sign In
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
            <h1>Register Your Account</h1>
          </div>
          <br />
          <form action="POST" @submit.prevent="subForm">
            <input
              type="text"
              placeholder="Name"
              v-model.trim="name"
              pattern="[a-zA-Z'-'\s]*"
              onkeydown="return /[a-z ]/i.test(event.key)"
              oninvalid="setCustomValidity('Invalid Name')"
              title="Only Alphabets"
              oninput="setCustomValidity('')"
              required
            />
            <br />
            <input
              type="text"
              maxlength="10"
              inputmode="numeric"
              pattern="[0-9]{10}"
              onkeypress="return /[0-9]/i.test(event.key) || event.key === 'Backspace'"
              placeholder="phone"
              title="Only Numbers and 10 digits"
              oninvalid="setCustomValidity('Invalid Mobile Number')"
              oninput="setCustomValidity('')"
              v-model.trim="phone"
              required
            />
            <br />
            <input
              type="email"
              placeholder="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              oninvalid="setCustomValidity('Invalid Email')"
              oninput="setCustomValidity('')"
              v-model.trim="email"
              required
            />
            <br />
            <input
              type="password"
              maxlength="18"
              pattern="[a-zA-Z0-9+&@#/%?=~_|!:,.;*^'-'\s]{6,}"
              placeholder="password"
              title="Valid and Min 6 chars"
              v-model.trim="password"
              required
            />
            <br />
            <p v-if="authError">{{ authMessage }}</p>
            <button class="button-37" type="submit">REGISTER</button>
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
  computed: {
    authMessage() {
      return this.$store.getters.authMessage;
    },
    authError() {
      return this.$store.getters.authError;
    },
  },

  methods: {
    signIn() {
      this.$store.commit("setAuthError", {
        error: false,
        message: null,
      });
    },
    async subForm() {
      const user = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("register", user);
      if (!this.authError) {
        this.name = null;
        this.phone = null;
        this.email = null;
        this.password = null;
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 86vh;
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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 18px 18px 50px 30px rgba(0, 0, 0, 0.15);
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

.mob {
  display: none;
}
.des {
  display: block;
}

@media (max-width: 768px) {
  .mob {
    display: block;
  }
  .des {
    display: none;
  }
  .login {
    width: 100%;
    height: 25vh;
    margin-top: calc(48vw + 20rem);
  }
  .login-card {
    flex-direction: column-reverse;
    width: 80%;
    height: max-content;
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
    padding: 0 0 7% 0;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .img img {
    width: 23%;
  }
}
</style>
