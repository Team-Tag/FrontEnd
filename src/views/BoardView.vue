<template>
  <PageHeader/>
  <div class="Board">
    <div class="Board-Content">
      <h2 class="menu-title">&#60;게시판&#47;&#62;</h2>
    </div>
    <div class = "boardMenu">
      <router-link to ="/"><p>Q&A</p></router-link>
      <router-link to ="/"><p>스터디 모집</p></router-link>
      <router-link to ="/"><p>자유 게시판</p></router-link>
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
  .boardMenu{
    display: flex;
    justify-content: center;
  }
  .boardMenu a{
    text-decoration: none;
    color : black;
    margin: 20px;
    font-size: 20px;
  }

</style>