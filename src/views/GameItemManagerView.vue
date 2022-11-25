<template>
  <div class="gameItemManager">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">虛寶序號</p>
      <div class="btn-group">
        <div class="upload-block">
          <img alt="menu" src="../assets/images/cross-circle.png" class="crosscircle-css">
          <span class="cursor-txt">新增可重複領取序號</span>
        </div>
      </div>
      <div class="resultBlock">
        <div class="navleftright">
          <div class="repeatly">
            <span>可重複領取序號</span>
          </div>
          <div class="norepeat">
            <span>不可重複領取序號</span>
          </div>
        </div>
        <div class="right-dl">
          <input type="text" v-model="resultInput" placeholder="表內搜尋" class="result-input">
          <img alt="menu" src="../assets/images/BTN_not sure.png" class="btnnot-css">
        </div>
        <div v-if="tableData.length > 0" class="data-block">
          <el-table
            :data="tableData"
            stripe
            class="retrieve-div1"
            :cell-class-name="uidcss"
            row-class-name="header-buysell">
            <el-table-column
              prop="id"
              label="ID"
              width="170">
            </el-table-column>
            <el-table-column
              prop="name"
              label="信件名稱"
              width="150">
            </el-table-column>
            <el-table-column
              prop="startime"
              label="公告開始時間"
              width="254">
            </el-table-column>
            <el-table-column
              prop="endtime"
              label="公告結束時間"
              width="254">
            </el-table-column>
            <el-table-column
              prop="receivedtimes"
              label="已領取次數"
              width="140">
            </el-table-column>
            <el-table-column
              prop="state"
              label="狀態"
              width="184">
            </el-table-column>
            <el-table-column
              prop="setting"
              label="設定"
              width="184">
              <template slot-scope="props">
                <p v-if="props.row.setting" class="buyBlack">查看</p>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-else class="data-block">
          <div class="whennodata">
            <div class="nodata-header">
              <p class="header-text0">ID</p>
              <p class="header-text1">信件名稱</p>
              <p class="header-text2 show-pc-css">公告開始時間</p>
              <p class="header-text2 show-mobile-css">開始時間</p>
              <p class="header-text3 show-pc-css">公告結束時間</p>
              <p class="header-text3 show-mobile-css">結束時間</p>
              <p class="header-text4">已領取次數</p>
              <p class="header-text5">狀態</p>
              <p class="header-text6">設定</p>
            </div>
          </div>
          <div class="nodatadiv">
            <p class="nodataTxt">沒有找到符合的結果</p>
          </div>
        </div>
        <div class="pagi-block">
          <span class="show-page">顯示2行 每頁顯示</span>
          <div class="totalno">
            <span>10</span>
            <img alt="menu" src="../assets/images/dropdown.png" class="updown-css">
          </div>
          <span class="itemrecord">項記錄</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
export default {
  name: 'gameItemManagerView',
  data() {
    return {
      opensidebar: false,
      startime: null,
      endtime: null,
      resultInput: null,
      tableData: [
        {
          id: 'daskdjbaskdbask',
          name: 'Title Here',
          startime: '202X-02-22 23:59:57',
          endtime: '202X-02-22 23:59:57',
          receivedtimes: '99',
          state: 'Expired',
          setting: '查看'
        },
        {
          id: 'daskdjbaskdbasl',
          name: 'Title Here',
          startime: '202X-02-22 23:59:57',
          endtime: '202X-02-22 23:59:57',
          receivedtimes: '99',
          state: 'Expired',
          setting: '查看'
        },
      ],
      // tableData: []
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
    uidcss() {
      return "selected-cell"
    },
  }
}
</script>

<style lang="scss" scoped>
  .gameItemManager {
    .btn-group {
      display: flex;
      justify-content: end;
      margin: 3rem 0 0 5rem;
      @media screen and (max-width: 768px) {
        margin: 10px 0 0;
      }
      .browser-css {
        background: #000000;
        border-radius: 12px;

        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        padding: 0 1rem;
        height: 37px;
        line-height: 37px;
      }
      .upload-block {
        display: flex;
        align-items: center;
        background: #000000;
        border-radius: 12px;
        padding: 0px 47px 0px 1rem;
        margin-left: 7px;
        height: 37px;
        line-height: 37px;
        margin-bottom: 2rem;
        @media screen and (max-width: 768px) {
          margin-left: 0;
          margin-right: 1rem;
          padding-left: 10px;
          padding-right: 2rem;
          height: 29px;
          line-height: 29px;
        }
        .cursor-txt {
          font-weight: 400;
          font-size: 20px;
          color: #FFF;
          margin-left: 1rem;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        @media screen and (max-width: 768px) {
          .add-css {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    .resultBlock {
      background: #F8F8F8;
      padding: 3rem 0rem 1rem 0rem;
      @media screen and (max-width: 768px) {
        padding-top: 0;
        padding-bottom: 0;
      }
      .navleftright {
        display: flex;
        margin: 0 1rem;
        border-bottom: 2px solid #545454; 

        border-bottom-left-radius: 12px;
        @media screen and (max-width: 768px) {
          margin: 0;
          background: #FFF;
        }
      }
      @media screen and (max-width: 768px) {
        .result-input {
          width: 178px;
        }
      }
      .repeatly {
        background: #545454;
        border-radius: 10px;
        width: 50%;
        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          height: 41px;
          line-height: 41px;
        }
      }
      .norepeat {
        font-weight: 400;
        font-size: 20px;
        color: #545454;
        width: 50%;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          height: 41px;
          line-height: 41px;
        }
      }
      .data-block {
        padding: 0 1rem;
        @media screen and (max-width: 768px) {
          padding: 0;
        }
      }
      .pagi-block {
        display: flex;
        font-weight: 400;
        font-size: 16px;
        color: #000;
        margin-top: 3rem;
        align-items: center;
        padding-left: 1rem;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          margin-top: 3rem;
          padding-bottom: 3rem;
          justify-content: center;
        }
        .show-page {
        }
        .totalno {
          border: 1px solid #000;
          padding: 3px 10px;
          display: flex;
          align-items: center;
          margin-left: 5px;
          margin-right: 5px;
        }
        .itemrecord {
          font-weight: 300;
          font-size: 16px;
          color: #000;
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
        .updown-css {
          width: 15px;
          height: 12px;
          margin-left: 10px;
        }
      }
      .buyBlack {
        font-weight: 400;
        font-size: 16px;
        color: #FFF;
        background: #000;
        border-radius: 12px;
        padding: 5px 1rem;
        width: 78px;
        text-align: center;
        margin-bottom: 0;
      }
      .buyGreen {
        color: #2FB123;
      }
      .sellRed {
        color: #E94F2E;
      }
      .right-dl {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0 1rem;
        @media screen and (max-width: 768px) { 
          margin-top: 47px;
          padding-right: 24px;
          background: #F8F8F8;
        }
      }
      .btnnot-css {
        width: 45px;
        height: 37px;
        margin-left: 5px;
        @media screen and (max-width: 768px) { 
          margin-left: 12px;
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
          @media screen and (max-width: 768px) { 
            font-size: 12px;
            padding-left: 0;
          }
          .header-text0, .header-text1, .header-text2, .header-text3, .header-text4, .header-text5, .header-text6 {
            margin-bottom: 0;
            text-align: center;

            padding: 0 12px;
            line-height: 1.3;
            @media screen and (max-width: 768px) { 
              padding: 0 0px;
            }
          }
          .header-text0 {
            width: 10%;
            @media screen and (max-width: 768px) { 
              width: 10%;
              padding: 0 7px;
            }
          }
          .header-text1 {
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text2 {
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text3 {
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text4 {
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text5 {
            width: 10%;
            @media screen and (max-width: 768px) { 
              width: 10%;
            }
          }
          .header-text6 {
            width: 10%;
            @media screen and (max-width: 768px) { 
              width: 10%;
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
  }
</style>

