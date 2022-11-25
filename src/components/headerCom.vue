<template>
  <div class="side-css">
    <div id="main" style="width: 100%;" :class="opensidebar ? 'navBar' : 'nonavBar'">
      <div class="head-bg">
        <div v-on:click="sidebar_open" class="btn-css" >
          <img alt="menu" src="../assets/images/btn_open_menu.png" class="menu-css">
        </div>
        <div v-on:click="sidebar_close()" class="btn1-css">
          <img alt="logout" src="../assets/images/btn_logout.png" class="p-logout-css show-pc-css">
          <img alt="logout" src="../assets/images/mobile/m-logout.png" class="m-logout-css show-mobile-css" :class="opensidebar ? 'notshow' : ''">
        </div>
      </div>
      
      <!-- <div class="welcome-div">
        <img alt="welcome" src="../assets/images/welcome.png" class="welcome-css">
      </div> -->
    </div>
    
    <div class="sidebarcss" style="display:none" id="mySidebar" :class="opensidebar ? 'showBar' : 'hideBar'" v-click-outside="onClickOutside">
      <div class="title-div">
        <p class="title-css">Manager Title</p>
        <p class="version-css">V1.0.0</p>
      </div>
      <div>
        <p class="nav-css" @click="gotoRoute('listing')">玩家列表</p>
        <p class="nav-css" @click="gotoRoute('resourceManage1')">資源管理-系統贈禮</p>
        <p class="nav-css" @click="gotoRoute('resourceManage2')">資源管理-資源操作</p>
        <p class="nav-css" @click="gotoRoute('announceManager')">公告管理</p>
        <p class="nav-css" @click="gotoRoute('gameItemManager')">虛寶序號 </p>
        <p class="nav-css" @click="gotoRoute('gameActivityManager')">活動管理 </p>
        <p class="nav-css" @click="gotoRoute('gameStoreManager')">商城管理</p>
        <p class="nav-css" @click="gotoRoute('gamePointMatchManager')">積分賽管理 </p>
        <p class="nav-css" @click="gotoRoute('gamePassSetting')">通行證管理 </p>
        <p class="nav-css" @click="gotoRoute('gameItemList')">物品清單</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    if (document.body) document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    if (document.body) document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
export default {
  name: 'headerCom',
  data() {
    return {
      variant: 'dark',
      opensidebar: false,
      trueBar: false
    }
  },
  created() {
  },
  methods: {
    gotoRoute(val) {
      this.$router.push({
        name: val
      });
    },
    sidebar_open() {
      // document.getElementById("mySidebar").style.display = "block";
      // document.getElementById("mySidebar").style.width = "15%";
      // document.getElementById("main").style.marginLeft = "15%";
      // document.getElementById("main").style.width = "85%";
      if(this.opensidebar && this.opensidebar == true) {
        this.opensidebar = false
        this.trueBar = false;
        this.$emit("toOpen", false);
      } else {
        this.opensidebar = true;
        this.trueBar = true;
        this.$emit("toOpen", true);
      }


    },
    sidebar_close() {
      // document.getElementById("main").style.marginLeft = "0%";
      // document.getElementById("main").style.width = "100%";
      // document.getElementById("mySidebar").style.display = "none";
      this.opensidebar = false;
      this.trueBar = false;
      this.$emit("toOpen", false);
    },
    onClickOutside() {
      if(this.trueBar == true) {
        this.trueBar = false;
        console.log(this.trueBar);
      } else {
        // console.log('else ', this.trueBar);
        this.sidebar_close();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss"; // $text-primary would be defined in that file

.side-css {
  display: flex;
  .head-bg {
    background: #363131;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .logo-css {
      font-weight: 500;
      font-size: 40px;
      color: $text-primary; // example
      color: #000;
  
      margin-top: 0;
      margin-bottom: 0;
    }
    .btn-css {
      background-color: unset;
      border-style: none;
      display: flex;
      align-items: center;
      padding-left: 2rem;
    }
    .btn1-css {
      background-color: unset;
      border-style: none;
      display: flex;
      align-items: center;
      padding-right: 2rem;
      @media screen and (max-width: 768px) {
        padding-right: 18px;
      }
    }
    .menu-css {
      width: 36px;
      height: 25px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 28px;
        height: 20px;
      }
    }
    .p-logout-css {
      width: 90px;
      height: 24px;
      // @media screen and (max-width: 768px) {
      //   display: none;
      // }
    }
    .m-logout-css {
      // display: none;
      @media screen and (max-width: 768px) {
        // display: block;
        width: 24px;
        height: 24px;
      }
    }
    
    .border-close {
      border-bottom: 3px solid #000000;
      width: 70%;
      margin: 0 auto;
    }
    .close-css {
      width: 36px;
      margin-top: 45px;
      margin-bottom: 45px;
      cursor: pointer;
    }
    .menu-div {
      display: flex;
      flex-direction: column;
      padding-left: 4rem;
    }
  }
  .showBar {
    display: block !important;
    width: 15%;
    @media screen and (max-width: 768px) {
      width: 56%;
      width: 73%;
    }
  }
  .hideBar {
    display: none;
  }

  .sidebarcss {
    background: #AEB4C2;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    height: 100%;
    position: fixed !important;
    z-index: 1;
    overflow: auto;

    padding-top: 10px;
    padding-left: 40px;
    text-align: left;
    @media screen and (max-width: 768px) {
      background: #AEB4C2;
    }
    .title-div {
      margin-bottom: 5rem;
      @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
      }
      .title-css, .version-css {
        font-weight: 500;
        font-size: 24px;
        color: #FFF;
        margin-bottom: 0;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
    .nav-css {
      font-weight: 400;
      font-size: 24px;
      color: #000;
      margin-bottom: 1.5rem;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 1rem;
      }
    }
  }
  .nav-link {
    font-weight: 500;
    font-size: 24px;
    color: #000;
    padding-top: 2rem;
    text-align: left;
    margin-bottom: 0;
  }
}
</style>
<style lang="scss">
.managerBlock {
  width: 1300px;
  max-width: 1300px;
  
  width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 36px;
  @media screen and (max-width: 768px) {
    width: unset;
    max-width: unset;
    padding: 0;
  }
}
.player-content {
  width: 711px;
  max-width: 711px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: unset;
    max-width: unset;
  }
}
.player-list-title {
  font-weight: 400;
  font-size: 24px;
  color: #313131;
  padding: 1rem 1rem 2rem;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
}
.upload-css, .gift-css, .cursor-css, .add-css {
  width: 24px;
  height: 24px;
  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
}
.crosscircle-css {
  width: 30px;
  height: 30px;
  @media screen and (max-width: 768px) {
  }
}
.result-input {
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 10px;
  height: 37px;
  text-align: center;
}

.navBar {
  margin-left: 15%;
  width: 85%;
  @media screen and (max-width: 768px) {
    margin-left: 72%;
    width: 15%;
  }
}
.nonavBar {
  margin-left: 0%;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .notshow {
    display: none !important;
  }
}

.navBar1 {
  margin-left: 15%;
  width: 85%;
  @media screen and (max-width: 768px) {
    // margin-left: 75%;
    width: 15%;
    visibility: hidden;
  }
}
.nonavBar1 {
  margin-left: 0%;
  width: 100%;
}

.show-pc-css {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.show-mobile-css {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
</style>


<style lang="scss">
.el-table th.el-table__cell {
  background: #424242 !important;
}
.el-table th.el-table__cell>.cell {
  font-weight: 400;
  font-size: 20px;
  color: #FFF;
  @media screen and (max-width: 768px) { 
    font-size: 12px;
  }
}
.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
  background: #EDEDED !important;
}
.el-table th.el-table__cell>.cell, .el-table td.el-table__cell div {
  text-align: center;
  display: flex;
  justify-content: center;
}
.el-table tr.header-buysell {
  th.el-table__cell {
    background-color: #698DAD !important;
  }
  td.el-table__cell {
    height: 55px;
  }
  td.el-table__cell {
    font-weight: 300;
    font-size: 16px;
    color: #000;
    @media screen and (max-width: 768px) { 
      font-size: 12px;
    }
  }
}
</style>


<style lang="scss">
  .startTime:focus, .endTime:focus, .searchTime:focus, .result-input:focus {
    outline: none;
  }
  .startTime::-webkit-input-placeholder, .endTime::-webkit-input-placeholder, .searchTime::-webkit-input-placeholder, .result-input::-webkit-input-placeholder { /* Edge */
    color: #CECECE;
    font-weight: 400;
    font-size: 16px;
  }
  .startTime:-ms-input-placeholder, .endTime:-ms-input-placeholder, .searchTime:-ms-input-placeholder, .result-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #CECECE;
    font-weight: 400;
    font-size: 16px;
  }
  .startTime::placeholder, .endTime::placeholder, .searchTime::placeholder, .result-input::placeholder {
    color: #CECECE;
    font-weight: 400;
    font-size: 16px;
  }
</style>

