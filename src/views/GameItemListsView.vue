<template>
  <div class="gameItemList">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">物品清單</p>
      <div class="itemBlock">
        <div class="leftBlock">
          <div class="left-items" v-for="i in 12" :key="i">Item Category Here</div>
        </div>
        <div class="rightBlock">
          <div class="right-items" v-for="i in 6" :key="i">Item Category Here</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
export default {
  name: 'GameItemListView',
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
.gameItemList {
  .itemBlock {
    display: flex;
    justify-content: space-between;
    // align-items: flex-start;
    @media screen and (max-width: 768px) {
      padding: 0 30px;
    }
    .leftBlock {
      display: flex;
      flex-wrap: wrap;
      width: 49%;
      @media screen and (max-width: 768px) {
        width: 48%;
      }
      .left-items {
        border-radius: 20px;
        font-weight: 400;
        font-size: 24px;
        color: #FFF;
        padding: 1rem 1.5rem;
        width: 33%;
        height: 123px;
        display: flex;
        align-items: center;
        margin: 1px;
        background: #3A3A47;
        @media screen and (max-width: 768px) {
          width: unset;
          font-size: 1rem;
          height: 102px;
          margin: 0 0 0.7rem;
        }
      }
    }
    .rightBlock {
      display: flex;
      flex-wrap: wrap;
      align-self: flex-start;
      width: 49%;
      @media screen and (max-width: 768px) {
        width: 48%;
      }
      .right-items {
        border-radius: 20px;
        font-weight: 400;
        font-size: 24px;
        color: #FFF;
        padding: 1rem 1.5rem;
        width: 33%;
        height: 123px;
        display: flex;
        align-items: center;
        margin: 1px 1px 1.5rem;
        background: #AEB4C2;
        @media screen and (max-width: 768px) {
          width: unset;
          font-size: 1rem;
          height: 102px;
          margin: 0 0 0.7rem;
        }
      }
    }
  }
}
</style>
