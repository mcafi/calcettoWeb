<template>
  <router-view/>
</template>

<style lang="postcss">
body, html {
  margin: 0;
  padding: 0;
}

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
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
