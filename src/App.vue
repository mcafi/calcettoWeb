<template>
  <router-view/>
</template>

<style lang="postcss">
body {
  height: 100vh;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.textHeader {
  @apply container w-full text-left p-5 text-4xl font-extrabold
}

.page {
  @apply h-full overflow-hidden flex flex-col align-middle bg-white dark:bg-grey-800 text-grey-800 dark:text-grey-200;
}
</style>
