<template>
    <PageHeader/>
    <div class="Message">
        <div class="Message-Content">
        <h1>메시지 페이지입니다</h1>
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
  .Message-Content{
      padding-top: 100px;
  }
  .Message{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
</style>
