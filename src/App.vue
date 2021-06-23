<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Main></Main>

  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar/SideBar.vue';
import Main from '@/components/Main/Main.vue';

export default {
  components:{
    Sidebar,
    Main
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
/* App */
#app {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
