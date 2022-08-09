<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog v-if="show" open>
        <header>
          <h2>Size Chart</h2>
          <i class="bx bx-x" @click="tryClose" />
        </header>
        <section>
          <div class="img">
            <img src="@/assets/sizeChart.png" alt="" />
          </div>
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
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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
  dialog {
    top: 32vh;
  }
}
</style>
