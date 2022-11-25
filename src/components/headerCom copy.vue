<template>
  <div class="">
    <div class="head-bg">
      <b-button v-b-toggle.sidebar-no-header class="btn-css">
        <img alt="menu" src="../assets/images/btn_open_menu.png" class="menu-css">
      </b-button>
      <b-button v-b-toggle.sidebar-no-header class="btn1-css">
        <img alt="logout" src="../assets/images/btn_logout.png" class="logout-css">
      </b-button>
    </div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div @click="hide" class="border-close">
          <img alt="menu" src="../assets/images/close.png" class="close-css">
        </div>
        <div>
          <nav class="menu-div">
            <router-link @click.native="hide" to="/search" class="nav-link">玩家資料查詢</router-link>
            <router-link @click.native="hide" to="/buySellHistory" class="nav-link">玩家拍賣場歷程</router-link>
            <router-link @click.native="hide" to="/userWalletHistory" class="nav-link">玩家出入金記錄</router-link>
            <router-link @click.native="hide" to="/rewardHistory" class="nav-link">玩家獲取&消耗記錄</router-link>
            <router-link @click.native="hide" to="/announcementManage" class="nav-link">公告管理</router-link>
          </nav>
        </div>
      </template>
    </b-sidebar>
    <div class="welcome-div">
      <img alt="welcome" src="../assets/images/welcome.png" class="welcome-css">
    </div>

    <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
      <button class="w3-bar-item w3-button w3-large"
      @click="w3_close()">Close &times;</button>
      <a href="#" class="w3-bar-item w3-button">Link 1</a>
      <a href="#" class="w3-bar-item w3-button">Link 2</a>
      <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>

    <div id="main">
      <div class="w3-teal">
        <button id="openNav" class="w3-button w3-teal w3-xlarge" @click="w3_open()">&#9776;</button>
        <div class="w3-container">
          <h1>My Page</h1>
        </div>
      </div>

      <img src="img_car.jpg" alt="Car" style="width:100%">

      <div class="w3-container">
        <p>In this example, the sidebar is hidden (style="display:none")</p>
        <p>It is shown when you click on the menu icon in the top left corner.</p>
        <p>When it is opened, it shifts the page content to the right.</p>
        <p>We use JavaScript to add a 25% left margin to the div element with id="main" when this happens. The value "25%" matches the width of the sidebar.</p>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'headerCom',
  data() {
    return {
      variant: 'dark'
    }
  },
  methods: {
    w3_open() {
      document.getElementById("main").style.marginLeft = "25%";
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("openNav").style.display = 'none';
    },
    w3_close() {
      document.getElementById("main").style.marginLeft = "0%";
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("openNav").style.display = "inline-block";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss"; // $text-primary would be defined in that file

.head-bg {
  background: #363131;
  height: 100px;
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
  }
  .menu-css {
    width: 36px;
    height: 25px;
  }
  .logout-css {
    width: 90px;
    height: 24px;
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
.welcome-div {
  .welcome-css {
    height: 100vh;
    height: calc(100vh - 105px);
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
</style>
<style>
.b-sidebar {
  width: 350px !important;
}
div#sidebar-no-header {
  background: #AEE1FF !important;
  box-shadow: 7px 0px 11px rgba(0, 0, 0, 0.15) !important;
}
</style>
