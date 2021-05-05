<template>
    <div class="Login h-full bg-white dark:bg-gray">
        <LoginNav />
        <form @submit.prevent="login()" class="container mx-auto p-12 sm:w-4/6">
            <label for="loginEmail" class="text-gray dark:text-white">Indirizzo Email</label>
            <input id="loginEmail" type="email" v-model="email">
            <label for="loginPassword" class="text-gray dark:text-white">Password</label>
            <input id="loginPassword" type="password" v-model="password">
            <button class="text-white bg-primary block my-4 mx-auto p-2 w-full" type="submit">LOGIN</button>
            <button class="text-white bg-primary block my-4 mx-auto p-2 w-full" type="button" @click="googleSignIn()">ENTRA CON Google</button>
        </form>
        <div></div>
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
<style lang="postcss">
.Login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
input {
    height: 32px;
    padding: 4px 12px;
    font-size: 22x;
}
label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}
button {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 16px;
    border: none;
}
</style>