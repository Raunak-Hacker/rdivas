<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog v-if="show" open>
        <header>
          <h2>All Reviews</h2>
          <i class="bx bx-x" @click="tryClose" />
        </header>

        <section class="cards" v-if="reviews.length != 0">
          <div class="card" v-for="review in reviews" :key="review.createdAt">
            <div class="card-head">
              <div class="order-det">
                <div class="order-id">
                  <strong for="Order">{{ Number(review.rating).toFixed(1) }}</strong>
                  &nbsp;<i class="bx bxs-star" />
                </div>
                <small class="order-time"> Commented on <br class="mob"> {{ review.createdAt }} </small>
              </div>
            </div>
            <div class="card-bot">
              <div class="name"><strong>Name: </strong> &nbsp; {{ review.name }}</div>
              <br />
              <div class="name">
                <strong>Comment: </strong> &nbsp; {{ review.review }}
              </div>
            </div>
          </div>
        </section>
        <section class="nRev" v-else>
          No reviews yet. <br />
          Be the first to review this product.
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["show", "reviews"],
  emits: ["close"],
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.nRev {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86vh;
  width: 100%;
  text-align: center;
  font-size: 1.35rem;
  font-weight: 600;
  color: black;
}
.card {
  min-height: 12vh;
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 5vh;
}
.card-head {
  background-color: #ffffff;
  height: 12vh;
  display: flex;
  width: 100%;
  padding-left: 2.5%;
}
.order-det {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.order-id {
  width: max-content;
  background-color: rgba(204, 204, 204, 0.658);
  height: 42%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5%;
  padding-right: 1.1%;
  color: var(--left-login);
  margin-right: 2%;
}
.order-id i {
  color: black;
  margin-bottom: 0.16rem;
}
.order-id strong {
  margin-right: 2%;
  color: black;
}
.card-head .btn {
  width: 7%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-head small {
  color: #8e8e8e;
}
.card-head .btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 50%;
  border: none;
  background-color: rgba(254, 151, 1, 255);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  color: white;
}
.card-head .btn i {
  font-size: 1.25rem;
  margin-right: 3%;
  color: var(--white);
}

.card-bot {
  border-top: 1px solid #e6e6e6;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
}
.review {
  outline: 1px solid #ccc;
  min-height: 13vh;
  margin-bottom: 3vh;
  padding: 0.5rem 1rem;
}
.img img {
  height: 50vh;
  width: 60vw;
  /* object-fit: cover; */
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

dialog {
  position: fixed;
  top: 7vh;
  left: 10%;
  height: 86vh;
  width: 80vw;
  z-index: 100;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  border-radius: 12px;
  overflow-y: auto;
}

header {
  background-color: #b20095;
  color: white;
  width: 60rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
}

header i {
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

section {
  padding: 1rem;
  padding-top: 5rem;
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
.mob{
  display: none;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 30rem);
    width: 60rem;
  }
}
@media (max-width: 768px) {
  .mob{
    display: block;
  }
  .img img {
    height: 20vh;
    width: 75vw;
    object-fit: contain;
  }
  header h2 {
    font-size: 1rem;
  }

  header i {
    font-size: 1.5rem;
  }
  header {
    position: fixed;
    width: 80%;
    border-top-right-radius: 0px;
  }
  .order-id {
    background-color: rgba(204, 204, 204, 0.658);
    padding: 0 0.8rem;
    padding-right: 0.65rem;
    color: var(--left-login);
    margin-right: 5%;
  }
  .order-id i {
    color: black;
    font-size: 0.8rem;
    margin-bottom: 0.08rem;
  }
  .order-id strong {
    margin-right: 0%;
    font-size: 0.85rem;
    color: black;
  }
  section {
    padding: 0.75rem;
    padding-top: 5rem;
  }
  .card {
    width: 100%;
  }
  .card-head,
  .card-bot {
    padding-left: 0.7rem;
  }
  dialog {
    top: 7vh;
    border-radius: 16px;
  }
  .order-time {
    width: 60%;
    margin-left: 0.5rem;
    font-size: 0.7rem;
  }
  .name {
    font-size: 0.8rem;
  }
}
</style>
