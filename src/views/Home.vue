<template>
  <div class="home">
    <Nav />
    <div class="textHeader">Partite</div>
    <div class="container scrollable">
      <ul id="matchList">
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
<style lang="scss">
.textHeader {
  width: 100%;
  max-width: 600px;
  text-align: left;
  padding: 24px;
  font-size: 42px;
  font-weight: bolder;
}

.home {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: 600px;
  overflow-y: auto;
}

.scrollable {
  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}

#matchList {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>