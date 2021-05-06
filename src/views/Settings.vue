<template>
    <div class="page">
        <div class="textHeader">Impostazioni</div>
        <div class="container">
            <button id="logoutButton" class="bg-red-500 active:bg-red-600 dark:active:bg-red-400" @click="logout()">ESCI</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings",
    methods: {
        logout: function () {
            this.$store.dispatch("logout")
        }
    }
}
</script>

<style lang="scss">
</style>