<template>

  <body :class="{ dark: dark }">

    <head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    </head>

    <nav class="sidebar" :class="{ close: close }">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/logo.png">
          </span>

          <div class="text logo-text">
            <span class="name">ADMIN PANEL</span>
            <span class="profession">User: Raunaks</span>
          </div>
        </div>

        <i class='bx bx-chevron-right toggle' @click="toggle"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">

          <!-- <li class="search-box">
            <i class='bx bx-search icon'></i>
            <input type="text" placeholder="Search...">
          </li> -->

          <ul class="menu-links">
            <li class="nav-link" :class="{ selBox: dashActive }" @click="dashboardClicked">
              <a>
                <i class='bx bx-home-alt icon'></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>

            <li class="nav-link" :class="{ selBox: anaActive }" @click="analyticsClicked">
              <a>
                <i class='bx bx-bar-chart-alt-2 icon'></i>
                <span class="text nav-text">Analytics </span>
              </a>
            </li>

            <!-- <li class="nav-link">
              <a >
                <i class='bx bx-bell icon'></i>
                <span class="text nav-text">Notifications</span>
              </a>
            </li> -->

            <li class="nav-link" :class="{ selBox: manActive }" @click="manageClicked">
              <a>
                <i class='bx bx-edit icon'></i>
                <span class="text nav-text">Manage Stuff</span>
              </a>
            </li>

            <li class="nav-link" :class="{ selBox: comActive }" @click="commentsClicked">
              <a>
                <!-- <i class='bx bx-heart icon'></i> -->
                <i class='bx bx-comment-check icon'></i>
                <span class="text nav-text">Comments</span>
              </a>
            </li>

            <li class="nav-link" :class="{ selBox: orderActive }" @click="ordersClicked">
              <a>
                <i class='bx bx-cart icon'></i>
                <span class="text nav-text">Orders</span>
              </a>
            </li>

          </ul>
        </div>

        <div class="bottom-content">
          <li class="">
            <a>
              <i class='bx bx-log-out icon'></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>

          <li class="mode">
            <div class="">
              <div class="sun-moon">
                <i class='bx bx-moon icon moon'></i>
                <i class='bx bx-sun icon sun'></i>
              </div>
            </div>
            <span class="mode-text text">
              <p v-if="dark">Light Mode</p>
              <p v-else>Dark Mode</p>
            </span>

            <div class="toggle-switch">
              <span class="switch" @click="darkMode"></span>
            </div>
          </li>

        </div>
      </div>

    </nav>

    <section class="home">
      <div class="img">
        <img src="@/assets/fullLogo.png" alt="" />
      </div>
      <slot></slot>
    </section>



  </body>
</template>

<script>
export default {
  data() {
    return {
      close: true,
      dark: false,
      dashActive: false,
      anaActive: false,
      manActive: true,
      comActive: false,
      orderActive: false
    }
  },
  methods: {
    toggle() {
      this.close = !this.close
    },
    darkMode() {
      this.dark = !this.dark
    },
    sideIconClick() {
      this.dashActive = false
      this.anaActive = false
      this.manActive = false
      this.comActive = false
      this.orderActive = false
    },
    dashboardClicked() {
      this.sideIconClick();
      this.dashActive = true
      this.$emit('dashboard');
    },
    analyticsClicked() {
      this.sideIconClick();
      this.anaActive = true
      this.$emit('analytics');
    },
    manageClicked() {
      this.sideIconClick();
      this.manActive = true
      this.$emit('manage');
    },
    commentsClicked() {
      this.sideIconClick();
      this.comActive = true
      this.$emit('comments');
    },
    ordersClicked() {
      this.sideIconClick();
      this.orderActive = true
      this.$emit('orders');
    }
  }
}
</script>

<style>
/* Google Font Import - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  /* ===== Colors ===== */
  --body-color: #E4E9F7;
  --sidebar-color: #FFF;
  --primary-color: #695CFE;
  --primary-color-light: #F6F5FF;
  --toggle-color: #DDD;
  --text-color: #707070;

  /* ====== Transition ====== */
  --tran-03: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.3s ease;
  --tran-05: all 0.3s ease;
}

body {
  min-height: 100vh;
  background-color: var(--body-color);
  transition: var(--tran-05);
}

::selection {
  background-color: var(--primary-color);
  color: #fff;
}

body.dark {
  --body-color: #18191a;
  --sidebar-color: #242526;
  --primary-color: #3a3b3c;
  --primary-color-light: #3a3b3c;
  --toggle-color: #fff;
  --text-color: #ccc;
}

/* ===== Sidebar ===== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15rem;
  padding: 0.6rem 0.85rem;
  background: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 1;
}

.sidebar.close {
  width: 4.8rem;
  margin-right: 1rem;

}

/* ===== Reusable code - Here ===== */
.sidebar li {
  height: 3.1rem;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
}

.sidebar header .image,
.sidebar .icon {
  min-width: 3rem;
  border-radius: 6px;
}

.sidebar .icon {
  min-width: 3.25rem;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.sidebar .text,
.sidebar .icon {
  color: var(--text-color);
  transition: var(--tran-03);
}

.sidebar .text {
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}

.sidebar.close .text {
  opacity: 0;
}

/* =========================== */

.sidebar header {
  position: relative;
}

.sidebar header .image-text {
  display: flex;
  align-items: space-around;
}

.sidebar header .logo-text {
  display: flex;
  flex-direction: column;
  margin-left: 8%;

}

header .image-text .name {
  margin-top: 2px;
  font-size: 1.15rem;
  font-weight: 600;

}

header .image-text .profession {
  font-size: 1rem;
  margin-top: 0.1rem;
  display: block;
}

.sidebar header .image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img {
  width: 2.5rem;
  border-radius: 6px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -1.5rem;
  transform: translateY(-50%) rotate(180deg);
  height: 1.5rem;
  width: 1.5rem;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.37rem;
  cursor: pointer;
  transition: var(--tran-05);
}

body.dark .sidebar header .toggle {
  color: var(--text-color);
}

.sidebar.close .toggle {
  transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu {
  margin-top: 2.5rem;
}

.selBox {
  border-radius: 6px;
  cursor: pointer;
  transition: var(--tran-05);

}



.sidebar li.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: var(--primary-color-light);
  color: var(--text-color);
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: var(--tran-05);
}

.sidebar li a {
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}

.sidebar li a:hover,
.selBox {
  background-color: var(--primary-color);
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text,
.selBox .icon,
.selBox .text {
  color: var(--sidebar-color);
}

body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text,
body.dark .selBox .icon,
body.dark .selBox .text {
  color: var(--text-color);
}

.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
  display: none;
}

.sidebar .menu-bar .mode {
  border-radius: 6px;
  background-color: var(--primary-color-light);
  position: relative;
  transition: var(--tran-05);
}

.menu-bar .mode .sun-moon {
  height: 3.125rem;
  width: 3.75rem;
}

.mode .sun-moon i {
  position: absolute;
}

.mode .sun-moon i.sun {
  opacity: 0;
}

body.dark .mode .sun-moon i.sun {
  opacity: 1;
}

body.dark .mode .sun-moon i.moon {
  opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 2.5rem;
  border-radius: 1.5rem;
  background-color: var(--toggle-color);
  transition: var(--tran-05);
}

.switch::before {
  content: '';
  position: absolute;
  height: 0.93rem;
  width: 0.93rem;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: var(--sidebar-color);
  transition: var(--tran-04);
}

body.dark .switch::before {
  left: 20px;
}

.home {
  position: absolute;
  top: 0;
  top: 0;
  left: 15rem;
  height: 100vh;
  width: calc(100% - 250px);
  background-color: var(--body-color);
  transition: var(--tran-05);
}

.home .text {
  font-size: 1.87rem;
  font-weight: 500;
  color: var(--text-color);
  padding: 12px 60px;
}

.sidebar.close~.home {
  left: 4.8rem;
  height: 100vh;
  width: calc(100% - 4.8rem);
}

body.dark .home .text {
  color: var(--text-color);
}

.img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img img {
  width: 20%;
  height: 20%;
}
</style>