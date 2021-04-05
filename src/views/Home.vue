<template>
  <div class="home">
    <Nav />
    <ul id="matchList">
      <li v-for="match of matchList" :key="match.id">
        <MatchItem v-bind:match="match"/>
      </li>
    </ul>
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
<style lang="scss">
.home {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#matchList {
  max-width: 600px;
  overflow-y: auto;
  height: calc(100% - 58px);
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>