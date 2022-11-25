<template>
  <div class="listing">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">玩家列表</p>
      <div class="all-blocks">
        <div class="each-block" v-for="i in 4" :key="i">
          <p class="no-txt">Number Here</p>
          <p class="topic-txt">Topic Here</p>
        </div>
      </div>
      <div class="timeBlock">
        <div class="input-block">
          <span class="sTimeTxt show-pc-css">開始時間</span>
          <span class="sTimeTxt show-mobile-css">開始時間：</span>
          <input type="text" v-model="startime" placeholder="請選擇時間" class="startTime">
        </div>
        <div class="input-block">
          <span class="eTimeTxt show-pc-css">結束時間</span>
          <span class="eTimeTxt show-mobile-css">結束時間：</span>
          <input type="text" v-model="endtime" placeholder="請選擇時間" class="endTime">
        </div>
        <div class="search-block">
          <img alt="menu" src="../assets/images/search.png" class="search-css">
          <input type="text" placeholder="請輸入UID" class="searchTime">
          <div class="searchBtn show-pc-css">查詢</div>
        </div>
        <div class="m-search show-mobile-css">
          <div class="searchBtn">查詢</div>
        </div>
      </div>
      <div class="resultBlock">
        <div class="right-dl">
          <input type="text" v-model="resultInput" placeholder="表內搜尋" class="result-input">
          <img alt="menu" src="../assets/images/BTN_not sure.png" class="btnnot-css">
          <div class="download-block">
            <img alt="menu" src="../assets/images/cloud-download.png" class="dl-img">
            <span class="xlsx-css">xlsx</span>
          </div>
        </div>
        <div v-if="tableData.length > 0" class="data-block">
          <el-table
            :data="tableData"
            stripe
            class="retrieve-div1"
            :cell-class-name="uidcss"
            row-class-name="header-buysell">
            <el-table-column
              prop="uid"
              label="UID"
              width="400">
            </el-table-column>
            <el-table-column
              prop="time"
              label="時間"
              width="250">
            </el-table-column>
            <el-table-column
              prop="buysell"
              label="類型"
              width="130">
              <template slot-scope="props">
                <span v-if="props.row.buysell == '售出'" class="buyGreen">{{ props.row.buysell }}</span>
                <span v-if="props.row.buysell == '購買'" class="sellRed">{{ props.row.buysell }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="namewithlevel"
              label="品項"
              width="360">
            </el-table-column>
            <el-table-column
              prop="price"
              label="價格"
              width="300">
              <template slot-scope="props">
                <span v-if="props.row.buysell == '售出'">{{ props.row.price }}</span>
                <span v-if="props.row.buysell == '購買'" class="sellPink">-{{ props.row.price }}</span>
              </template>
            </el-table-column>
          </el-table>
          <div>
            <div class="nomorediv" v-if="nomoredata">
              <p class="loadmore">資料已全數顯示</p>
            </div>
            <div class="loadmorediv" v-else>
              <p class="loadmore">再載入10筆</p>
            </div>
          </div>
        </div>
        <div v-else class="data-block">
          <div class="whennodata">
            <div class="nodata-header">
              <p class="header-text0">ID</p>
              <p class="header-text1">暱稱</p>
              <p class="header-text2">最後登入時間</p>
              <p class="header-text3">註冊時間</p>
              <p class="header-text4">狀態</p>
            </div>
          </div>
          <div class="nodatadiv">
            <p class="nodataTxt">沒有找到符合的結果</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
export default {
  name: 'ListingView',
  data() {
    return {
      opensidebar: false,
      startime: null,
      endtime: null,
      resultInput: null,
      // tableData: [
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '售出',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '購買',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '購買',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '購買',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '售出',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '售出',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '售出',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '購買',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '售出',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   },
      //   {
      //     uid: '26652cwchjbewv744vds4vdvdsva',
      //     time: '202X-0X-0X,23:59:59',
      //     buysell: '購買',
      //     namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
      //     price: '60,000'
      //   }
      // ],
      tableData: []
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

.all-blocks {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 18px;
  }
  .each-block {
    background: #AEB4C2;
    border-radius: 20px;
    width: 23%;
    margin: 0 1%;
    text-align: left;
    padding: 1.2rem 1.5rem;
    @media screen and (max-width: 768px) {
      background: #AEB4C2;
      border-radius: 20px;
      width: 46%;
      margin: 0 1.5% 3%;

      width: 49%;
      margin: 0 0 2%;
      padding: 1.2rem;
    }
    .no-txt {
      font-weight: 400;
      font-size: 24px;
      color: #FFF;
      margin-bottom: 0;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
    .topic-txt {
      font-weight: 400;
      font-size: 20px;
      color: #FFF;
      margin-bottom: 0;
    }
  }
}
.timeBlock {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 3rem 3rem 2rem 0;
  @media screen and (max-width: 768px) {
    display: unset;
  }
  .sTimeTxt, .eTimeTxt {
    font-weight: 400;
    font-size: 20px;
    color: #343434;
    margin-right: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin-right: 5px;
    }
  }
  .startTime, .endTime {
    font-weight: 400;
    font-size: 16px;
  
    border: 1px solid #000000;
    border-radius: 10px;
    padding-left: 10px;
    height: 38px;
  }
  .input-block {
    display: flex;
    align-items: center;
    // margin-right: 50px;
    @media screen and (max-width: 768px) {
      justify-content: center;
      margin: 21px 0 21px 0;
    }
  }
  .search-block {
    display: flex;
    align-items: center;
    margin-left: 4rem;
    @media screen and (max-width: 768px) {
      margin-left: 0;
      width: 90%;
      margin: 30px auto 0;
      justify-content: space-evenly;
    }
    .search-css {
      width: 24.85px;
      height: 24.85px;
      margin-right: 5px;
      @media screen and (max-width: 768px) {
        margin-right: 0;
      }
    }
    .searchTime {
      font-weight: 400;
      font-size: 16px;
      color: #CECECE;
      height: 37px;
      border: 1px solid #000000;
      border-radius: 10px;
      padding-left: 10px;
      @media screen and (max-width: 768px) {
        width: 80%;
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
    }
  }
  @media screen and (max-width: 768px) { 
    .m-search {
      width: 83%;
      margin: 9px auto 0;
      display: flex;
      justify-content: end;
    }
    .searchBtn {
      font-weight: 400;
      color: #FFF;
      
      padding: 0 20px;
      font-size: 16px;
      background: #000000;
      border-radius: 12px;
      height: 34px;
      line-height: 34px;
    }
  }
}
.resultBlock {
  background: #F8F8F8;
  padding: 3rem 0rem 1rem 0rem;
  margin: 0 1rem;
  @media screen and (max-width: 768px) { 
    margin: 0;
    padding-bottom: 0;
  }
  .data-block {
    padding: 0 1rem;
    @media screen and (max-width: 768px) { 
      padding: 0;
    }
  }
  .right-dl {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    padding: 0 2rem;
    @media screen and (max-width: 768px) { 
      justify-content: center;
      padding: unset;
      width: 85%;
      margin: 0 auto 1rem;
    }
    .result-input {
      width: 177px;
    }
  }
  .btnnot-css {
    width: 45px;
    height: 37px;
    margin-left: 5px;
  }
  .download-block {
    border: 1px solid #000000;
    border-radius: 10px;
    height: 37px;
    line-height: 37px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 2rem;
    margin-left: 5px;
    .dl-img {
      width: 26px; 
      height: 26px; 
    }
    .xlsx-css {
      font-weight: 400;
      font-size: 16px;
      color: #000;
      @media screen and (max-width: 768px) { 
        margin-left: 5px;
      }
    }
  }
  .whennodata {
    .nodata-header {
      height: 43px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 400;
      font-size: 20px;
      color: #FFF;
      background: #424242;
      padding-left: 3rem;
      @media screen and (max-width: 768px) { 
        font-size: 12px;
        padding-left: 0;
      }
      .header-text0, .header-text1, .header-text2, .header-text3, .header-text4 {
        margin-bottom: 0;
        text-align: center;
        padding: 0 12px;
        line-height: 1.3;
      }
      .header-text0 {
        width: 10%;
        @media screen and (max-width: 768px) { 
          width: 20%;
        }
      }
      .header-text1 {
        width: 10%;
        @media screen and (max-width: 768px) { 
          width: 20%;
        }
      }
      .header-text2 {
        width: 15%;
        @media screen and (max-width: 768px) { 
          width: 20%;
        }
      }
      .header-text3 {
        width: 15%;
        @media screen and (max-width: 768px) { 
          width: 20%;
        }
      }
      .header-text4 {
        width: 35%;
        @media screen and (max-width: 768px) { 
          width: 20%;
        }
      }
    }
  }
  .nodatadiv {
    height: 71px;
    line-height: 71px;
    background: #EDEDED;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    .nodataTxt {
      font-weight: 400;
      font-size: 20px;
      color: #9E9E9E;
      margin-bottom: 0;
      @media screen and (max-width: 768px) { 
        font-size: 1rem;
      }
    }
  }
}
</style>

