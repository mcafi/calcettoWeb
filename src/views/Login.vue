<template>
    <div class="h-full flex flex-col page">
        <form @submit.prevent="login()" class="container mx-auto p-12 sm:w-3/6 m-auto">
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
export default {
    name: "Login",
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
input {
    @apply h-8 py-2 px-3 w-full text-grey-800 dark:text-grey-100 bg-grey-200 dark:bg-grey-600 rounded-lg;
}
label {
    @apply block text-grey-800 dark:text-grey-50 mt-3 text-base font-bold
}
button {
    @apply text-grey-50 bg-primary hover:shadow-lg active:bg-primary-dark dark:active:bg-primary-light block my-6 mx-auto py-2 px-4 w-full sm:w-60;
}
</style>