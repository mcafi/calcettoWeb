<template>
    <div class="Login">
        <LoginNav />
        <div id="loginContent">
            <form @submit.prevent="login()">
                <label for="loginEmail">Indirizzo Email</label>
                <input id="loginEmail" type="email" v-model="email">
                <label for="loginPassword">Password</label>
                <input id="loginPassword" type="password" v-model="password">
                <button type="submit">LOGIN</button>
                <button type="button" @click="googleSignIn()">ENTRA CON Google</button>
            </form>
        </div>
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
<style lang="scss">
.Login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #007935;
}
form {
    max-width: 100vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    max-width: calc(100% - 32px);
    margin-bottom: 30px;
    height: 32px;
    padding: 4px 12px;
    font-size: 22x;
    color: #333;
    border: none;
    border-radius: 16px;
    display: block;
    box-shadow: inset 0 0 10px #ddd;
}
label {
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}
button {
    margin-bottom: 24px;
    background-color: white;
    color: #007935;
    font-size: 20px;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 16px;
    border: none;
}
</style>