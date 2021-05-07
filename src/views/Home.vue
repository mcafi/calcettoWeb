<template>
  <div class="page">
    <Nav />
    <div class="textHeader">Partite</div>
    <div class="container p-5 overflow-y-auto">
      <ul v-if="matchList.length">
        <li v-for="match of matchList" :key="match.id">
          <MatchItem v-bind:match="match"/>
        </li>
      </ul>
      <p v-else>Che tristezza...</p>
    </div>
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