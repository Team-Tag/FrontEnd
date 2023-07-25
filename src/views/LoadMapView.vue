<template>
    <PageHeader/>
    <div class="LoadMap">
        <h2 class="menu-title">&#60;로드맵&#47;&#62;</h2>
        <div class="LoadMap-Content">
          <div class = "front-end">
            <p>front-end</p>
          </div>
          <div class = "back-end">
            <p>back-end</p>
          </div>
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
  .front-end{
    width : 500px;
    height: 500px;
    margin : 50px;
    border-radius: 20px;
    background-image: url("@/assets/frontEnd.jpg");
    background-size : 650px 500px;
  }
  .back-end{
    width : 500px;
    height: 500px;
    margin : 50px;
    border-radius: 20px;
    background-image: url("@/assets/backEnd.jpeg");
    background-size : 650px 500px;
  }
</style>