<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog v-if="show" open>
        <header>
          <h2>Add Address</h2>

          <i class="bx bx-x" @click="tryClose" />
        </header>
        <section>
          <form @submit.prevent="postAdd">
            <div class="flex-box">
              <div class="field">
                <label for="name">Name: </label
                ><input type="text" v-model.trim="name" required />
              </div>
              <div class="field">
                <label for="name">Phone: </label
                ><input type="number" v-model.trim="phone" required />
              </div>
            </div>
            <div class="flex-box">
              <div class="field">
                <label for="name">Pin Code: </label
                ><input
                  type="number"
                  v-model.trim="pinCode"
                  @focusout="getAdd"
                  required
                />
              </div>
              <div class="field">
                <label for="name">Country: </label>
                <select required v-model="country" v-if="foundPin">
                  <option value="" v-if="countries.length == 0">Enter Pin Code</option>
                  <option
                    v-for="country in countries"
                    :key="country.Country"
                    :value="country.Country"
                  >
                    {{ country.Country }}
                  </option>
                </select>
                <input type="text" v-model.trim="country" required v-else />
              </div>
            </div>
            <div class="flex-box">
              <div class="field">
                <label for="name">State: </label>
                <select required v-model="state" v-if="foundPin">
                  <option value="" v-if="states.length == 0">Enter Pin Code</option>
                  <option v-for="state in states" :key="state.State" :value="state.State">
                    {{ state.State }}
                  </option>
                </select>
                <input type="text" v-model.trim="state" required v-else />
              </div>
              <div class="field">
                <label for="name">City: </label>
                <select required v-model="city" v-if="foundPin">
                  <option value="" v-if="districts.length == 0">Enter Pin Code</option>
                  <option
                    v-for="city in districts"
                    :key="city.District"
                    :value="city.District"
                  >
                    {{ city.District }}
                  </option>
                </select>
                <input type="text" v-model.trim="city" required v-else />
              </div>
            </div>
            <div class="field adr">
              <label for="name" style="margin-right: 4%">Full Address: </label
              ><textarea
                style="margin-right: 4%"
                v-model.trim="address"
                rows="10"
                maxlength="200"
                placeholder="Max 200 Chars"
              ></textarea>
              <button type="submit">Add</button>
            </div>
          </form>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ["close"],
  data() {
    return {
      name: "",
      phone: "",
      pinCode: "",
      country: "",
      countries: [],
      state: "",
      states: [],
      city: "",
      districts: [],
      other: true,
      post: null,
      foundPin: true,
      address: null,
    };
  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
    getAdd() {
      fetch("https://api.postalpincode.in/pincode/" + this.pinCode)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status == "Error") {
            this.foundPin = false;
            return;
          }
          this.post = data[0].PostOffice;
          this.country = this.post[0].Country;
          this.state = this.post[0].State;
          this.city = this.post[0].District;
          for (let i = 0; i < this.post.length; i++) {
            let savedcountry = this.countries.find(
              (country) => country.Country == this.post[i].Country
            );

            if (savedcountry == undefined) {
              this.countries.push({
                Country: this.post[i].Country,
              });
            }

            let savedstate = this.states.find(
              (state) => state.State == this.post[i].State
            );
            if (savedstate == undefined) {
              this.states.push({
                State: this.post[i].State,
              });
            }
            let savedcity = this.districts.find(
              (district) => district.District == this.post[i].District
            );
            if (savedcity == undefined) {
              this.districts.push({
                District: this.post[i].District,
              });
            }
          }
        });
    },
    async postAdd() {
      const user = {
        name: this.name,
        mobile: this.phone,
        pincode: this.pinCode,
        country: this.country,
        state: this.state,
        city: this.city,
        address: this.address,
      };
      await fetch(this.$store.getters.host + "/user/add/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(user),
      });
      this.$store.commit("getUser");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.field input,
.field textarea,
.field select,
option {
  width: 60%;
  border: 0;
  background-color: rgba(221, 221, 221, 0.305);
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  resize: none;
}
.flex-box .field {
  width: 40%;
  padding: 0 1.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.field {
  width: 100%;
  padding: 0 1.5%;
  display: flex;
  align-items: center;
}
.flex-box {
  margin: 5vh 0;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
button {
  width: 20%;
  border: none;
  background-color: #e705c2;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
}
dialog {
  position: fixed;
  top: 12vh;
  left: 10%;
  width: 80vw;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #b20095;
  color: white;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header i {
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 30rem);
    width: 60rem;
  }
}
@media (max-width: 768px) {
  header h2 {
    font-size: 1rem;
  }

  header i {
    font-size: 1.5rem;
  }
  .field input,
  .field select,
  option {
    width: 70%;
    border: 0;
    background-color: rgba(221, 221, 221, 0.305);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: none;
    resize: none;
  }
  dialog {
    top: 8vh;
    width: 90vw;
    left: 5%;
    position: absolute;
  }
  .flex-box {
    margin: 0;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-box .field {
    width: 100%;
  }
  .field label {
    font-size: smaller;
  }
  section,
  form {
    width: 100%;
  }
  .adr {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2vh;
  }
  .field textarea {
    width: 100%;
  }
  .adr button {
    margin-top: 2vh;
    width: 100%;
  }
}
</style>
