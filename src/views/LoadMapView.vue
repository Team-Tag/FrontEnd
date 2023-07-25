<template>
    <PageHeader/>
    <div class="LoadMap">
        <div class="LoadMap-Content">
        <h1>로드맵 페이지입니다</h1>
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
  .LoadMap-Content{
      padding-top: 100px;
  }
  .LoadMap{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
</style>