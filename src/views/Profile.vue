<template>
    <div class="Profile">
        <Nav />
        <div class="textHeader">Profilo</div>
        {{ user.name }}
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
            return this.$store.state
        }
    },
    mounted: function () {
        console.log(this.user)
    }
}
</script>
<style>
.Profile {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>