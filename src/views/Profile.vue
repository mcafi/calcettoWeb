<template>
    <div class="page h-100 flex flex-col">
        <div class="textHeader">{{ user.name }}</div>
        <div class="container overflow-y-auto mx-auto flex-1 p-5">
            <h2 class="text-lg text-left">{{ user.username }}</h2>
            <div class="text-left px-5">
                <router-link to="/settings">
                    <button>IMPOSTAZIONI</button>
                </router-link>
            </div>
            <h2 class="text-xl text-left font-bold">Prossime partite</h2>
            <ul v-if="matchList.length" class="my-4">
                <MatchItem v-for="match of matchList" :key="match.id" :match="match"/>
            </ul>
            <p v-cloak v-else class="font-italic my-4">Non hai partite che ti aspettano</p>
            <h2 class="text-xl text-left font-bold">Storico partite</h2>
            <ul v-if="previousMatchList.length" class="my-4">
                <MatchItem v-for="match of previousMatchList" :key="match.id" :match="match"/>
            </ul>
            <p v-cloak v-else class="my-4">Non hai ancora partecipato a una partita</p>
        </div>
        <Nav />
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
            matchList: [],
            previousMatchList: []
        }
    },
    computed: {
        user () {
            return this.$store.getters.getUser
        }
    },
    mounted: function () {
        console.log(this.user)
        this.$store.dispatch("getUserFutureMatchesList").then(querySnapshot => {
            querySnapshot.forEach(doc => this.matchList.push(doc.data()))
        });
        this.$store.dispatch("getUserPreviousMatchesList").then(querySnapshot => {
            querySnapshot.forEach(doc => this.previousMatchList.push(doc.data()))
        });
    }
}
</script>

<style lang="postcss">
button {
    @apply text-grey-50 bg-primary hover:shadow-lg active:bg-primary-dark dark:active:bg-primary-light block my-6 mx-auto py-2 px-4 w-full;
}
</style>