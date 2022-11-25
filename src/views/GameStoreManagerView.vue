<template>
  <div class="gameItemManager">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">商城管理</p>
      <div class="btn-group">
        <div class="p-upload">
          <div class="upload-block">
            <img alt="menu" src="../assets/images/white-cloud-dl.png" class="add-css">
            <span class="cursor-txt">輸出商品.xlsx</span>
          </div>
        </div>
        <div class="p-upload">
          <div class="upload-block">
            <img alt="menu" src="../assets/images/cloud-upload.png" class="upload-css">
            <span class="cursor-txt">上架商品.json</span>
          </div>
        </div>
        <div class="p-upload1">
          <div class="upload-block1">
            <img alt="menu" src="../assets/images/cross-circle.png" class="crosscircle-css">
            <span class="cursor-txt">新增組合包</span>
          </div>
        </div>
      </div>
      <div class="resultBlock">
        <div class="navleftright">
          <div class="comboPack">
            <span>組合包</span>
          </div>
          <div class="ticketItem">
            <span>票券單品</span>
          </div>
          <div class="goldCoins">
            <span>金幣商品</span>
          </div>
          <div class="lottery">
            <span>樂透彩</span>
          </div>
          <div class="gachaShop">
            <span>轉蛋鋪</span>
          </div>
          <div class="petSupply">
            <span>寵物用品</span>
          </div>
          <div class="storeCoupon">
            <span>儲值票券</span>
          </div>
        </div>
        <div class="p-rightdl">
          <div class="right-dl">
            <input type="text" v-model="resultInput" placeholder="表內搜尋" class="result-input">
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
              prop="id"
              label="商品ID"
              width="170">
            </el-table-column>
            <el-table-column
              prop="state"
              label="狀態"
              width="">
            </el-table-column>
            <el-table-column
              prop="name"
              label="商品名稱"
              width="150">
            </el-table-column>
            <el-table-column
              prop="lastupdatedtime"
              label="最後更新時間"
              width="220">
            </el-table-column>
            <el-table-column
              prop="priority"
              label="優先度"
              width="220">
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
              <p class="header-text0">商品ID</p>
              <p class="header-text1">狀態</p>
              <p class="header-text2">商品名稱</p>
              <p class="header-text3">最後更新時間</p>
              <p class="header-text4">優先度</p>
              <p class="header-text5">設定</p>
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
          state: '下架',
          name: 'Title Here',
          lastupdatedtime: '202X-02-22 23:59:57',
          priority: '15002',
          setting: '查看'
        },
        {
          id: 'daskdjbaskdbasl',
          state: '下架',
          name: 'Title Here',
          lastupdatedtime: '202X-02-22 23:59:57',
          priority: '15001',
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
        display: unset;
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
      .p-upload, .p-upload1 {
        @media screen and (max-width: 768px) {
          width: 100%;
          display: flex;
          justify-content: end;
          margin-bottom: 1rem;
        }
        .upload-block, .upload-block1 {
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
            width: 169px;
            font-size: 1rem;
            margin-left: 0;
            padding: 0 1rem 0 10px;
            text-align: left;
            height: 35px;
            line-height: 35px;
            margin-bottom: 0;
            margin-right: 30px;
          }
          .cursor-txt {
            font-weight: 400;
            font-size: 20px;
            color: #FFF;
            margin-left: 1rem;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
          @media screen and (max-width: 768px) {
            .add-css, .upload-css {
              width: 23px;
              height: 23px;
            }
          }
        }
        @media screen and (max-width: 768px) {
          .upload-block1 {
            padding-left: 5px;
          }
        }
      }
      @media screen and (max-width: 768px) {
        .p-upload1 {
          margin-bottom: 22px;
        }
      }
    }
    .resultBlock {
      background: #F8F8F8;
      padding: 3rem 0rem 1rem 0rem;
      @media screen and (max-width: 768px) {
        padding: 0;
        background: #FFF;
      }
      .navleftright {
        display: flex;
        margin: 0 1rem;
        border-bottom: 2px solid #545454; 

        border-bottom-left-radius: 12px;
        @media screen and (max-width: 768px) {
          margin: 0;
          flex-wrap: wrap;
          border-bottom: unset;
          border-bottom-left-radius: 0;
          background: #F8F8F8;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
          padding: 27px 12px 25px;
        }
      }
      .comboPack {
        background: #545454;
        border-radius: 10px;
        width: 14.286%;
        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          width: 32%;
          height: 32px;
          line-height: 32px;
          margin: 0 0.666% 1.33%;
        }
      }
      .ticketItem, .goldCoins, .lottery, .gachaShop, .petSupply, .storeCoupon {
        font-weight: 400;
        font-size: 20px;
        color: #545454;
        width: 14.286%;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          width: 32%;
          height: 32px;
          line-height: 32px;
          margin: 0 0.666% 1.33%;

          background: #D1D1D1;
          border-radius: 10px;
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
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        color: #000;
        margin-top: 3rem;
        margin-left: 1rem;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          justify-content: center;
          padding-top: 42px;
          padding-bottom: 45px;
          background: #f8f8f8;
          margin-top: 0;
          margin-left: 0;
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
      .p-rightdl {
        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
        .result-input {
          @media screen and (max-width: 768px) {
            width: 50%;
          }
        }
        .right-dl {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
          background: #f8f8f8;
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
          .header-text0, .header-text1, .header-text2, .header-text3, .header-text4, .header-text5 {
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
              width: 15%;
              padding: 0 5px;
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
              width: 20%;
            }
          }
          .header-text3 {
            width: 20%;
            @media screen and (max-width: 768px) { 
              width: 20%;
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
