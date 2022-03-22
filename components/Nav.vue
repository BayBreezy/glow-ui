<template>
  <nav
    class="flex items-center justify-between px-5 sm:px-10 lg:px-8 max-w-6xl mx-auto py-4 lg:py-8 xl:px-0"
  >
    <nuxt-link
      class="tracking-wide text-3xl font-bold text-slate-900 dark:text-slate-200"
      to="/"
      ><span class="text-primary">G</span>low</nuxt-link
    >
    <div class="hidden lg:flex items-center space-x-8">
      <ul class="flex items-center space-x-8">
        <li
          @click="active = menu"
          v-for="menu in menus"
          :key="`navMenu-${menu}`"
          class="group"
        >
          <nuxt-link
            class="text-sm transition-all hover:text-primary dark:hover:text-primary dark:text-slate-200"
            to="#"
            :class="{
              'text-primary font-bold dark:text-primary': menu === active,
            }"
            >{{ menu }}</nuxt-link
          >
          <div
            :class="{ 'scale-100': active == menu }"
            class="w-[90%] mx-auto mt-1 bg-primary h-0.5 scale-x-0 group-hover:scale-100 transition-transform rounded-full duration-150"
          ></div>
        </li>
        <ThemeToggle />
      </ul>
      <button
        class="bg-primary text-white font-bold text-sm rounded-md py-3.5 px-3 hover:shadow-lg hover:shadow-red-400 transition-all duration-300 dark:hover:shadow-slate-700"
      >
        Login/Sign Up
      </button>
    </div>

    <!-- Menu toggle -->
    <client-only>
      <div class="lg:hidden flex items-center space-x-3">
        <button
          class="border border-primary dark:border-slate-200 dark:hover:border-primary transition-all duration-300 rounded flex items-center justify-center p-2"
        >
          <ThemeToggle />
        </button>
        <button
          @click="mobileNav = !mobileNav"
          class="border border-primary text-primary rounded p-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 group-hover:scale-125 transition-all ease-in-out duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </client-only>
    <!-- Mobile nav -->
    <div
      v-if="mobileNav"
      :class="{
        'opacity-95': mobileNav,
      }"
      class="absolute inset-0 h-screen overflow-x-hidden z-50 bg-gradient-to-br from-red-50 via-red-200 to-red-400 dark:bg-gradient-to-tl dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
    >
      <div class="flex justify-between items-center px-6 py-6">
        <nuxt-link
          class="tracking-wide text-3xl font-bold text-slate-900 dark:text-slate-200"
          to="/"
          ><span class="text-primary">G</span>low</nuxt-link
        >
        <button
          @click="mobileNav = !mobileNav"
          class="border border-primary text-primary rounded p-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul class="flex flex-col space-y-4 justify-center items-center mt-5">
        <li
          @click="
            active = menu;
            mobileNav = false;
          "
          v-for="menu in menus"
          :key="`mobileMenu-${menu}`"
          class="group"
        >
          <nuxt-link
            class="text-xl transition-all hover:text-primary dark:hover:text-primary dark:text-slate-200"
            to="#"
            :class="{
              'text-primary font-bold dark:text-primary': menu === active,
            }"
            >{{ menu }}</nuxt-link
          >
          <div
            :class="{ 'scale-100': active == menu }"
            class="w-[90%] mx-auto mt-1 bg-primary h-0.5 scale-x-0 group-hover:scale-100 transition-transform rounded-full duration-150"
          ></div>
        </li>
      </ul>
      <button
        class="bg-primary mx-auto mt-7 block text-white font-bold text-sm rounded-md py-3.5 px-3 hover:shadow-lg hover:shadow-red-400 transition-all duration-300 dark:hover:shadow-slate-700"
      >
        Login/Sign Up
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileNav: false,
      active: "Home",
      menus: ["Home", "Products", "About", "Contact", "FAQs"],
    };
  },
};
</script>

<style></style>
