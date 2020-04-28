<template>
  <div id="app">
    <Menu class="menu-fixed"></Menu>
    <keep-alive>
      <router-view class="pb-5 pb-lg-0"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.loading = true;
      this.$store.dispatch('loadEpisodes').catch(err => {
        console.error(err);
      });
    }
  }
</script>

<style lang="scss">
  :root {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #242144;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(120, 132, 150, 0.6);
      border-radius: 10px;
    }

    background: #132a3a;
    width: 100%;
    height: 100%;
    scrollbar-color: rgba(120, 132, 150, 0.6) #242144; /* thumb and track color */
    scrollbar-width: thin;
  }

  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: white;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100% !important;
    height: 100% !important;
    background: transparent !important;
  }

  #app {
    position: relative;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }
</style>
