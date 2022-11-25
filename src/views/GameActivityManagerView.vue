<template>
  <div class="gameActivityManager">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">活動管理</p>
      <div class="resultBlock1">
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
              width="200">
            </el-table-column>
            <el-table-column
              prop="title"
              label="活動標題"
              width="160">
            </el-table-column>
            <el-table-column
              prop="state"
              label="狀態"
              width="160">
            </el-table-column>
            <el-table-column
              prop="startime"
              label="開始時間"
              width="240">
            </el-table-column>
            <el-table-column
              prop="endtime"
              label="結束時間"
              width="240">
            </el-table-column>
            <el-table-column
              prop="priority"
              label="優先度"
              width="168">
            </el-table-column>
            <el-table-column
              prop="setting"
              label="設定"
              width="180">
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
              <p class="header-text1">活動標題</p>
              <p class="header-text2">狀態</p>
              <p class="header-text3">開始時間</p>
              <p class="header-text4">結束時間</p>
              <p class="header-text5">優先度</p>
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
  name: 'gameActivityManagerView',
  data() {
    return {
      opensidebar: false,
      startime: null,
      endtime: null,
      resultInput: null,
      tableData: [
        {
          id: 'daskdjbaskdbask',
          title: 'Title Here',
          state: 'Ongoing',
          startime: '202X-02-22 23:59:57',
          endtime: '202X-02-22 23:59:57',
          priority: '300000',
          setting: '查看'
        },
        {
          id: 'daskdjbaskdbasl',
          title: 'Title Here',
          state: 'Closed',
          startime: '202X-02-22 23:59:57',
          endtime: '202X-02-22 23:59:57',
          priority: '200000',
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
  .gameActivityManager {
    .resultBlock1 {
      background: #F8F8F8;
      padding: 1rem 0rem 1rem 0rem;
      @media screen and (max-width: 768px) {
        padding-top: 40px;
        padding-bottom: 0;
      }
      .data-block {
        padding: 0 1rem;
        @media screen and (max-width: 768px) {
          padding: 0;
        }
      }
      .pagi-block {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        color: #000;
        margin-top: 3rem;
        padding-left: 1rem;
        @media screen and (max-width: 768px) {
          justify-content: center;
          margin-top: 2rem;
          padding-bottom: 2rem;
          font-size: 14px;
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
      .btnnot-css {
        width: 45px;
        height: 37px;
        margin-left: 5px;
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
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 10%;
              padding: 0 12px;
            }
          }
          .header-text1 {
            width: 20%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text2 {
            width: 20%;
            @media screen and (max-width: 768px) { 
              width: 10%;
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
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
            }
          }
          .header-text6 {
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
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