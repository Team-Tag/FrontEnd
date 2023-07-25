<template>
  <div class="home">
    <div class="screen1"></div>
    <div class="screen2"></div>
    <div class="screen3"></div>
    <div class="screen4"></div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style scoped>
  .home{
    padding-top: 70px;
    width: 100%;
    height: 4096px;
  }
  .screen1{
    width : 100%;
    height : 1024px;
    background-color: yellow;
  }
  .screen2{
    width: 100%;
    height: 1024px;
    background-image: url("@/assets/BackImg1.jpeg");
  }
  .screen3{
    width:100%;
    height: 1024px;
    background-image: url("@/assets/BackImg2.jpeg");
  }
  .screen4{
    width: 100%;
    height: 924px;
    background-image: url("@/assets/BackImg3.jpeg");
  }
</style>

