<template>
  <div class="page">
    <div class="textHeader">Partite</div>
    <div class="container flex-1 p-5 overflow-y-auto">
      <ul v-if="matchList.length">
        <MatchItem v-for="match of matchList" :key="match.id" :match="match"/>
      </ul>
      <p v-cloak v-else>Caricamento...</p>
    </div>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import MatchItem from "@/components/MatchItem.vue"

export default {
  name: 'Home',
  components: {
    Nav,
    MatchItem
  },
  data: () => {
    return {
      matchList: []
    }
  },
  mounted: function () {
    this.$store.dispatch("getMatchesList").then(querySnapshot => {
      querySnapshot.forEach(doc => this.matchList.push(doc.data()))
    });
  }
}
</script>