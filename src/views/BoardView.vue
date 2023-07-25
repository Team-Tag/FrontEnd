<template>
  <PageHeader/>
  <div class="Board">
    <div class="Board-Content">
      <h1>게시판 페이지입니다</h1>
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

</style>