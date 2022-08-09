<template>
  <section style="height: 89vh">
    <div class="card">
      <h2>Forgot password</h2>
      <br />
      <form @submit.prevent="forgotSub">
        <div class="inp">
          <label for="">New password: </label
          ><input type="text" v-model="pass" required />
        </div>
        <br />
        <button class="button-37" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pass: null,
    };
  },
  methods: {
    forgotSub() {
      fetch(this.$store.getters.host + "/resetpassword/" + this.$route.params.id, {
        method: "POST",
        body: JSON.stringify({
          password: this.pass,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === "success") {
            this.$router.replace("/login");
            alert("Password changed successfully");
          } else {
            this.$router.replace("/login");
            alert("Something went wrong");
          }
        });
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
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
h2 {
  text-align: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.inp {
  width: 70%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
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
  .card {
    max-width: 80%;
  }
  .card h2 {
    font-size: 1.5rem;
  }
  .card form {
    width: 100%;
  }
  .card form .inp {
    flex-direction: column;
    width: 100%;

  }
   input {
    width: 85%;
    margin-top: 3vh;
  }
  .card form .button-37 {
    width: 100%;
  }
}
</style>
