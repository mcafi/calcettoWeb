<template>
  <div class="page bg-white dark:bg-grey-800">
    <Nav />
    <div class="textHeader text-grey-800 dark:text-grey-200">Partite</div>
    <div class="container overflow-y-auto">
      <ul id="matchList" class="m-0 p-0 list-none">
        <li v-for="match of matchList" :key="match.id">
          <MatchItem v-bind:match="match"/>
        </li>
      </ul>
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