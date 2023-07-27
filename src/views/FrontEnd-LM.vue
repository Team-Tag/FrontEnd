<template>
    <PageHeader/>
    <div class="LoadMap">
        <h2 class="menu-title">&#60;Front-End&#47;&#62;</h2>

            <div class = "LoadMap-container">
                <div class="LoadMap-item">
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <div class="RoadmapCard">
                        <img src = "@/assets/vue-img.jpeg">
                        <p>vue 속성 꿀팁!</p>
                    </div>
                    <router-link to="/LoadMap/FrontEnd/EditBoard" class="AddButton">
                        <div class = "AddButtonText"><p>추가 하기</p></div>
                    </router-link>
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
    height: 1524px;
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
  .RoadmapCard:hover{
    box-shadow: 10px 10px 10px gray;
  }
  .RoadmapCard img{
    width : 250px;
    height : 150px;
    border-radius: 20px;
    margin: 10px 10px;
  }
  .RoadmapCard p{
    font-size: 18px;
    font-weight: 600;
  }
    .AddButton{
    width: 300px;
    height: 300px;
    margin: 0px 50px 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AddButton div{
    width: 100px;
    height: 100px;
    background-color : #008D39;
    opacity: 80%;
    border-radius: 50px;
  }
  .AddButton:hover{
    opacity: 50%;
  }
  .AddButtonText{
    text-align: center;
    line-height: 100px;
    color : white;
    font-weight: 700;
    font-size: 20px;
  }

</style>