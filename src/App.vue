<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- https://cli.vuejs.org/guide/cli-service.html -->
<!--
https://www.google.com/search?q=FREE+Hosting+for+your+Vue.js+App!+(Deploy+to+Netlify)&oq=FREE+Hosting+for+your+Vue.js+App!+(Deploy+to+Netlify)&aqs=chrome..69i57j0i546l4.296j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:6b3514c0,vid:W2lGxvNs2KM 
-->
