<template>
    <PageHeader/>
    <div class="LoadMap">
        <h2 class="menu-title">&#60;Back-End&#47;&#62;</h2>
        <div class="LoadMap-Content">

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

  .LoadMap{
    background-color: #F2F2F2;
    width : 100%;
    height: 1024px;
    padding-top: 100px;
  }
  .LoadMap-Content{
    display: flex;
    justify-content: center;
  }
  .menu-title {
    font-size: 40px;
  }
</style>