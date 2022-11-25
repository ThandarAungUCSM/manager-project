<template>
  <div class="home">
    <headerCom @toOpen="toOpen" />
    <div class="welcome-div" :class="opensidebar ? 'navBar1' : 'nonavBar1'">
      <img alt="welcome" src="../assets/images/welcome.png" class="welcome-css">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
export default {
  name: 'HomeView',
  data() {
    return {
      opensidebar: false
    }
  },
  components: {
    headerCom,
  },
  methods: {
    toOpen(val) {
      console.log("continueOrder(val=", val, ")");
      this.opensidebar = val
    },
  }
}
</script>

<style lang="scss" scoped>
.welcome-div {
  .welcome-css {
    height: 100vh;
    height: calc(100vh - 70px);
    @media screen and (max-width: 768px) {
      width: 227px;
      height: 227px;
      margin-top: 5rem;
    }
  }
}

</style>
