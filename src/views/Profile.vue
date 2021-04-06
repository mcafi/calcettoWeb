<template>
    <div class="page">
        <Nav />
        <div class="textHeader">Profilo</div>
        <div class="container">
            <div class="userInfo">
                <h1>{{ user.name }}</h1>
                <h2>{{ user.username }}</h2>
                <router-link to="/settings">
                    <button>IMPOSTAZIONI
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "Profile",
    components: {
        Nav
    },
    computed: {
        user () {
            return this.$store.getters.getUser
        }
    },
    mounted: function () {
        console.log(this.user)
    }
}
</script>

<style lang="scss">
.userInfo {
    text-align: left;
    padding: 0 20px;
}
</style>