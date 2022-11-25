<template>
  <div class="managerPage1">
    <headerCom @toOpen="toOpen" />
    <div class="managerBlock">
      <p class="player-list-title">資源管理>系統贈禮</p>
      <div class="btn-group">
        <div class="p-browser"><p class="browser-css">瀏覽</p></div>
        <div class="p-upload">
          <div class="upload-block">
            <img alt="menu" src="../assets/images/cloud-upload.png" class="upload-css">
            <span class="upload-txt">上傳物件清單</span>
          </div>
        </div>
        <div class="p-upload">
          <div class="upload-block1">
            <img alt="menu" src="../assets/images/gift.png" class="gift-css">
            <span class="upload-txt">寄送禮物</span>
          </div>
        </div>
        <div class="p-upload">
          <div class="upload-block">
            <img alt="menu" src="../assets/images/settings.png" class="gift-css">
            <span class="upload-txt">登入贈禮設定</span>
          </div>
        </div>
      </div>
      <div class="timeBlock">
        <div class="left-block">
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
              label="管理員ID"
              width="220">
            </el-table-column>
            <el-table-column
              prop="time"
              label="操作時間"
              width="248">
            </el-table-column>
            <el-table-column
              prop="operationContent"
              label="操作內容"
              width="248">
            </el-table-column>
            <el-table-column
              prop="object"
              label="對象"
              width="210">
            </el-table-column>
            <el-table-column
              prop="state"
              label="狀態"
              width="210">
            </el-table-column>
            <el-table-column
              prop="detailInfo"
              label="詳細資訊"
              width="200">
              <template slot-scope="props">
                <p v-if="props.row.detailInfo" class="buyBlack">查看</p>
                <!-- <span v-if="props.row.detailInfo == '售出'" class="buyGreen">{{ props.row.detailInfo }}</span>
                <span v-if="props.row.detailInfo == '購買'" class="sellRed">{{ props.row.detailInfo }}</span> -->
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-else class="data-block">
          <div class="whennodata">
            <div class="nodata-header">
              <p class="header-text0">管理員ID</p>
              <p class="header-text1">操作時間</p>
              <p class="header-text2">操作內容</p>
              <p class="header-text3">對象</p>
              <p class="header-text4">狀態</p>
              <p class="header-text5">詳細資訊</p>
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
  name: 'manager1View',
  data() {
    return {
      opensidebar: false,
      startime: null,
      endtime: null,
      resultInput: null,
      tableData: [
        {
          id: 'daskdjbaskdbask',
          time: '202X-02-22 23:59:59',
          operationContent: 'CONTENT TEXT',
          object: 'Target Name Here',
          state: 'Status Here',
          detailInfo: '查看'
        },
        {
          id: 'daskdjbaskdbasd',
          time: '202X-02-22 23:59:59',
          operationContent: 'CONTENT TEXT',
          object: 'Target Name Here',
          state: 'Status Here',
          detailInfo: '查看'
        }
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
  .managerPage1 {
    .btn-group {
      display: flex;
      justify-content: end;
      margin: 3rem 0 0 5rem;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0 30px 0 0;
      }
      .p-browser {
        @media screen and (max-width: 768px) {
          width: 100%;
          display: flex;
          justify-content: end;
          margin-bottom: 1rem;
        }
        .browser-css {
          background: #000000;
          border-radius: 12px;

          font-weight: 400;
          font-size: 20px;
          color: #FFF;
          padding: 0 2rem;
          height: 37px;
          line-height: 37px;
          margin-bottom: 0;
          @media screen and (max-width: 768px) {
            padding: 0;
            font-size: 1rem;
            width: 93px;
            height: 29px;
            line-height: 29px;
          }
        }
      }
      .p-upload {
        @media screen and (max-width: 768px) {
          width: 100%;
          display: flex;
          justify-content: end;
          margin-bottom: 1rem;
        }
        .upload-block, .upload-block1 {
          background: #000000;
          border-radius: 12px;
          padding: 0px 47px 0px 1rem;
          margin-left: 7px;
          height: 37px;
          line-height: 37px;
          display: flex;
          align-items: center;
          @media screen and (max-width: 768px) {
            width: 169px;
            font-size: 1rem;
            margin-left: 0;
            padding: 0 1rem 0 10px;
            text-align: left;
            height: 29px;
            line-height: 29px;
          }
          .upload-txt {
            font-weight: 400;
            font-size: 20px;
            color: #FFF;
            margin-left: 1rem;
            @media screen and (max-width: 768px) {
              font-size: 1rem;
              margin-left: 10px;
            }
          }
        }
        .upload-block1 {
          @media screen and (max-width: 768px) {
            padding: 0 3rem 0 10px;
            justify-content: space-between;
          }
        }
      }
    }
    .timeBlock {
      display: flex;
      align-items: center;
      margin: 1.7rem 0 1.7rem 5rem;
      justify-content: space-between;
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
        @media screen and (max-width: 768px) {
          height: 32px;
        }
      }
      .input-block {
        display: flex;
        align-items: center;
        margin-right: 50px;
        @media screen and (max-width: 768px) {
          margin-right: 0;
          justify-content: center;
          margin-bottom: 20px;
        }
      }
      .left-block {
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
          display: unset;
        }
      }
      .search-block {
        display: flex;
        align-items: center;
        margin-left: 3rem;
        @media screen and (max-width: 768px) {
          margin-left: 0;
          width: 92%;
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
          width: 84%;
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
      margin-top: 1rem;
      .data-block {
        padding: 0 1rem;
        @media screen and (max-width: 768px) { 
          padding: 0;
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
        margin-bottom: 1rem;
        padding: 0 1rem;
        @media screen and (max-width: 768px) { 
          padding-right: 24px;
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
            width: 15%;
            @media screen and (max-width: 768px) { 
              width: 15%;
              padding: 0 12px;
            }
          }
          .header-text1 {
            width: 20%;
            @media screen and (max-width: 768px) { 
              width: 20%;
            }
          }
          .header-text2 {
            width: 20%;
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
            width: 15%;
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
  }
</style>

<!-- table data when no-data && when data designs are success -->

