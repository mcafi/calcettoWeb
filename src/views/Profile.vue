<template>
    <div class="page">
        <Nav />
        <div class="textHeader">{{ user.name }}</div>
        <div class="container mx-auto p-5">
            <h2 class="text-lg text-left">{{ user.username }}</h2>
            <div class="text-left px-5">
                <router-link to="/settings">
                    <button>IMPOSTAZIONI</button>
                </router-link>
            </div>
            <h2 class="text-xl text-left font-bold">Prossime partite</h2>
            <ul v-if="matchList.length" id="matchList">
                <li v-for="match of matchList" :key="match.id">
                <MatchItem v-bind:match="match"/>
                </li>
            </ul>
            <p v-else>Non hai partite che ti aspettano</p>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import MatchItem from "@/components/MatchItem.vue";

export default {
    name: "Profile",
    components: {
        Nav,
        MatchItem
    },
    data: () => {
        return {
            matchList: []
        }
    },
    computed: {
        user () {
            return this.$store.getters.getUser
        }
    },
    mounted: function () {
        console.log(this.user)
        this.$store.dispatch("getUserPreviousMatchesList").then(querySnapshot => {
            querySnapshot.forEach(doc => this.matchList.push(doc.data()))
        });
    }
}
</script>

<style lang="postcss">
button {
    @apply text-grey-50 bg-primary hover:shadow-lg active:bg-primary-dark dark:active:bg-primary-light block my-6 mx-auto py-2 px-4 w-full;
}
</style>