<template>
  <PageHeader/>
  <div class="Board">
    <div class="Board-Content">
      <h2 class="menu-title">&#60;게시물 작성&#47;&#62;</h2>
    </div>

    
  </div>  
  <PageFooter/>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

export default {
  components :{
    PageHeader,
    PageFooter,
  }
};
</script>

<style scoped>
  .Board-Content{
      padding-top: 100px;
  }
  .Board{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
  .menu-title {
    font-size: 40px;
  }
</style>