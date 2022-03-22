<template>
  <section
    class="flex justify-between items-center lg:items-start h-[88vh] lg:h-full max-w-6xl mx-auto pt-10 relative"
  >
    <div class="absolute top-[10%] right-[10%] z-50 hidden lg:inline-block">
      <img
        src="/home2.jpg"
        alt="Woman with a bag in sunglasses"
        class="object-cover w-44 h-44 rounded-full hover:scale-105 cursor-pointer hover:rotate-2 hover:shadow-lg hover:shadow-red-200 dark:hover:shadow-slate-800 transition-all duration-200"
      />
    </div>
    <div class="relative w-full px-7 sm:px-20 lg:mt-0 lg:max-w-lg lg:px-5">
      <div
        class="text-primary font-semibold uppercase tracking-wide dark:text-primary-dark"
      >
        Explore the world
      </div>
      <h1
        class="lg:mt-10 mt-5 font-bold text-5xl lg:text-6xl capitalize tracking-wider dark:text-white"
      >
        Treat yourself to something great
        <span class="text-primary dark:text-primary-dark">today</span>
      </h1>
      <p class="mt-6 text-lg dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        perspiciatis sapiente doloribus ve
      </p>
      <div class="flex items-center space-x-5 pt-7">
        <button
          class="text-sm py-3 px-4 lg:px-7 lg:text-base font-medium bg-primary text-white rounded-md hover:shadow-lg hover:shadow-red-400 dark:hover:shadow-slate-700 transition-all duration-300"
        >
          View Products
        </button>
        <button
          class="text-sm py-3 px-4 lg:px-7 lg:text-base font-medium border border-slate-400 rounded-md text-slate-600 hover:shadow-lg transition-all duration-300 dark:text-slate-300 dark:border-slate-100 dark:hover:shadow-slate-700"
        >
          Login/Sign Up
        </button>
      </div>
    </div>
    <div class="relative hidden lg:block">
      <img
        src="/heels.png"
        alt="Women wearing jacket and carrying bags"
        class="object-cover drop-shadow-xl z-10"
      />
    </div>
    <Bestseller />
  </section>
</template>

<script>
export default {};
</script>

<style></style>
