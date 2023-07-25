<template>
    <PageHeader/>
    <div class="Member">
        <div class="Member-Content">
        <h1>멤버 페이지입니다</h1>
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
  .Member-Content{
      padding-top: 100px;
  }
  .Member{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
</style>