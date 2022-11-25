<template>
  <div class="gamePointMatchManager">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">積分賽管理</p>
    </div>
    <div class="player-content pc-m-condition">
      <div>
        <div class="topTitleRow">
          <p class="pointRaceSetting">積分賽設定</p>
          <div class="playerBtns">
            <div class="editbtn">
              <span>編輯</span>
            </div>
            <div class="pointBackupbtn">
              <span>玩家積分備分</span>
            </div>
          </div>
        </div>
        <div class="player-data">
          <div class="row-data">
            <div class="season-left">賽期開始時間</div>
            <div class="season-right-gray">2022/02/22 23:59:59 AM</div>
          </div>
          <div class="row-data">
            <div class="season-left">賽期結束時間</div>
            <div class="season-right-white">2022/03/22 05:00:00 AM</div>
          </div>
          <div class="row-data">
            <div class="season-left">積分賽期數</div>
            <div class="season-right-gray">3</div>
          </div>
          <div class="row-data">
            <div class="season-left">開始排程(cron)</div>
            <div class="season-right-white">10***</div>
          </div>
          <div class="row-data">
            <div class="season-left">結束排程(cron)</div>
            <div class="season-right-gray">5923**</div>
          </div>
          <div class="row-data">
            <div class="season-left">積分賽週期</div>
            <div class="season-right-white">60</div>
          </div>
          <div class="row-data">
            <div class="season-left">自動化下一期</div>
            <div class="season-right-gray">是</div>
          </div>
          <div class="row-data">
            <div class="season-left">是否已經結算獎勵</div>
            <div class="season-right-white">否</div>
          </div>
          <div class="row-data">
            <div class="season-left">狀態</div>
            <div class="season-right-gray">開放中</div>
          </div>
        </div>
      </div>
      <div class="timeBlock">
        <div class="first-time">
          <span class="sTimeTxt show-pc-css">開始時間</span>
          <span class="sTimeTxt show-mobile-css">開始時間：</span>
          <input type="text" v-model="startime" placeholder="請選擇時間" class="startTime">
        </div>
        <div class="second-time">
          <span class="eTimeTxt show-pc-css">結束時間</span>
          <span class="eTimeTxt show-mobile-css">結束時間：</span>
          <input type="text" v-model="endtime" placeholder="請選擇時間" class="endTime">
        </div>
        <div class="searchBtn">查詢</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
export default {
  name: 'GamePointMatchManagerView',
  data() {
    return {
      opensidebar: false,
      startime: null,
      endtime: null
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
.gamePointMatchManager {
  .topTitleRow {
    height: 69px;
    background: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
    .pointRaceSetting {
      font-weight: 400;
      font-size: 20px;
      color: #000;
      margin-bottom: 0;
    }
    .playerBtns {
      display: flex;
      .editbtn, .pointBackupbtn {
        padding: 0 1.5rem;
        font-weight: 400;
        font-size: 16px;
        color: #FFF;
        background: #000000;
        border-radius: 12px;
        height: 36.65px;
        line-height: 36.65px;
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
        margin-left: 8px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          margin-left: 1rem;
        }
      }
    }
  }
  .pc-m-condition {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
    }
    .player-data {
      filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
      margin-bottom: 3rem;
      .row-data {
        display: flex;
        margin-bottom: 2px;
        .season-left {
          font-weight: 400;
          font-size: 20px;
          height: 53px;
          line-height: 53px;
          text-align: left;
          padding-left: 2rem;
          color: #FFF;
          background: #303237;
          width: 45%;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
            padding-left: 1.5rem;
          }
        }
        .season-right-gray {
          font-weight: 400;
          font-size: 20px;
          height: 53px;
          line-height: 53px;
          text-align: left;
          padding-left: 2rem;
          color: #393939;
          background: #EDEDED;
          width: 55%;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
            height: unset;
            line-height: unset;
            padding-left: 1.5rem;
            padding-right: 2rem;
            display: flex;
            align-items: center;
          }
        }
        .season-right-white {
          font-weight: 400;
          font-size: 20px;
          height: 53px;
          line-height: 53px;
          text-align: left;
          padding-left: 2rem;
          color: #393939;
          background: #FFF;
          width: 55%;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
            height: unset;
            line-height: unset;
            padding-left: 1.5rem;
            padding-right: 2rem;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .timeBlock {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .first-time {
        @media screen and (max-width: 768px) {
          display: flex;
          margin-bottom: 21px;
        }
      }
      .second-time {
        @media screen and (max-width: 768px) {
          display: flex;
          margin-bottom: 33px;
        }
      }
      .sTimeTxt, .eTimeTxt {
        font-weight: 400;
        font-size: 20px;
        color: #343434;

        padding-right: 1rem;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
      .startTime, .endTime {
        font-weight: 400;
        font-size: 16px;
      
        border: 1px solid #000000;
        border-radius: 10px;
        padding-left: 10px;
        height: 38px;
        width: 189px;
        @media screen and (max-width: 768px) {
          height: 32px;
        }
      }
      .searchBtn {
        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        background: #000000;
        border-radius: 12px;
        padding: 0 2rem;
        height: 37px;
        line-height: 37px;
        margin-left: 5px;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>
