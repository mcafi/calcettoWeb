<template>
    <div class="page">
        <div class="container h-full">
            <div class="textHeader flex flex-row justify-between">
                <span>Impostazioni</span>
                <router-link class="font-extrabold" to="/profile">X</router-link>
            </div>
            <button class="bg-red-500 active:bg-red-600 dark:active:bg-red-400 w-40" @click="logout()">ESCI</button>
        </div>
        <Nav/>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue"

export default {
    name: "Settings",
    components: {
        Nav
    },
    methods: {
        logout: function () {
            this.$store.dispatch("logout")
        }
    }
}
</script>

<style lang="scss">
</style>