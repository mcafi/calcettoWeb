<template>
    <div class="Login h-full flex flex-column bg-white dark:bg-grey-800">
        <LoginNav />
        <form @submit.prevent="login()" class="container mx-auto p-12 sm:w-4/6 m-auto">
            <label for="loginEmail">Indirizzo Email</label>
            <input id="loginEmail" type="email" v-model="email">
            <label for="loginPassword">Password</label>
            <input id="loginPassword" type="password" v-model="password">
            <button type="submit">LOGIN</button>
            <button type="button" @click="googleSignIn()">ENTRA CON Google</button>
        </form>
    </div>
</template>
<script>
import LoginNav from "@/components/LoginNav.vue"

export default {
    name: "Login",
    components: {
        LoginNav
    },
    data: () => {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login: function () {
            this.$store.dispatch('login', {
            email: this.email,
            password: this.password
            })
        },
        googleSignIn: function () {
            this.$store.dispatch('googleSignIn');
        }
    }
}
</script>
<style lang="postcss" scoped>
.Login {
    display: flex;
    flex-direction: column;
}
input {
    @apply h-8 py-2 px-3 w-full text-grey-800 dark:text-grey-100 bg-white dark:bg-grey-600 border-b-2 border-grey-700 dark:border-white;
}
label {
    @apply block text-grey-800 dark:text-grey-50 mt-3 text-base font-bold
}
button {
    @apply text-grey-50 bg-primary block my-6 mx-auto py-2 px-4 w-full rounded-full border-0 text-lg font-semibold;
}
</style>