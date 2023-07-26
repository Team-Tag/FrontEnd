<template>
    <PageHeader/>
    <div class="LoadMap">
        <h2 class="menu-title">&#60;Front-End&#47;&#62;</h2>

            <div class = "LoadMap-container">
                <div class="LoadMap-item">
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
                    <div class="RoadmapCard"></div>
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
    height: 2048px;
    padding-top: 100px;

  }
  .menu-title {
    font-size: 40px;
  }
  .LoadMap-container{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    height: 1024px;

  }
  .LoadMap-item{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 20px;
    gap: 0;
  }
  .RoadmapCard{
    width: 300px;
    height: 300px;
    background-color: white;
    margin: 0px 50px 50px 50px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
  }
</style>