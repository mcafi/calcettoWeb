<template>
    <div id="nav" class="Nav">
    <router-link to="/map">Mappa</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profilo</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss">
.Nav {
    width: 100%;
    max-width: 100vw;
  padding: 20px;
  background-color: #007935;

    a {
        display: inline-block;
        color: #f0f0f0;
        text-decoration: none;
        text-transform: uppercase;

        &:not(:first-child) {
            margin-left: 15px;
        }

        &.router-link-exact-active {
            font-weight: bold;
            text-shadow: #8fb 0 0 20px;
            color: #fff;
        }
    }
}
</style>