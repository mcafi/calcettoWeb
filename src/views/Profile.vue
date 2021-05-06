<template>
    <div class="page">
        <Nav />
        <div class="textHeader">Profilo</div>
        <div class="container">
            <div class="text-left px-5">
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

<style lang="postcss">
button {
    @apply text-grey-50 bg-primary hover:shadow-lg active:bg-primary-dark dark:active:bg-primary-light block my-6 mx-auto py-2 px-4 w-full;
}
</style>