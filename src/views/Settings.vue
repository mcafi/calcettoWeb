<template>
    <div class="page">
        <div class="textHeader">Impostazioni</div>
        <div class="container">
            <button id="logoutButton" @click="logout()">ESCI</button>
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
#logoutButton {
    background-color: #c00;
    color: white;
}
</style>