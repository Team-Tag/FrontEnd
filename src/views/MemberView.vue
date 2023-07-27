<template>
    <PageHeader/>
    <div class="Member">
        <div class="Member-Content">
        <h1>&#60;Team Tag Member&#47;&#62;</h1>
        </div>
        <router-link to = '/DetailMember'><button>멤버 상세페이지 이동</button></router-link>
        <router-link to = '/DetailMember'>
          <div class="CardBundle">
              <div v-for="(image,index) in Allimages" :key="index" class="MemberCard">
                <!-- <img :src="require(`@/assets/${image}`)"> -->
                <div class="memberImage" :style="{ 'background-image': 'url(' + require(`@/assets/${image}`) + ')' }"></div>
                <div class="aboutMember">
                  <div id="memberName">{{image.split('.')[0]}}</div>
                  <p>짧은 한마디</p>
                </div>
              </div>
              <div class="MemberCard" id="AddMemberCard">
                  <div>추가하기</div>
              </div>
          </div>
        </router-link>
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
  },
  data(){
    return{
            Allimages:['로니콜먼.webp','짱구.webp','도라애몽.png','루피.png','강인.jpg','김민재.jpg','릴러말즈.jpg','맹구.jpg','미키마우스.jpg','뽀로로.jpg','영남회장.jpeg','피카츄.jpg'],

    }

  }
};
</script>
<style scoped>
  h1{
    font-weight: 800;
  }
  .Member-Content{
      padding-top: 100px;
  }
  .Member{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
    justify-content: center;
  }
  .Member a{
    text-decoration:none; 
    color: black

  }
  .CardBundle{
   
    width: 100vw; 
     padding: 2%; 
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    flex:space-around;
    
    
  }
  .MemberCard{
    width: 15vw; height:20vw;
    background-color: white;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px gray;
    align-content: center;
    
  }
  .MemberCard:hover{
    box-shadow: 10px 10px 10px gray;
   
  } 
 
  
 
  .memberImage{
    margin: auto;
    margin-top: 1vw;
    width: 12vw; height: 12vw;
    border-radius: 5px;
    background-size: cover;
    
  }
#memberName{
  margin-top: 6px;
  margin-bottom: 6px;
  font-weight: 600;

  }
  .aboutMember{
    
    text-align: center;
    
  }
  #AddMemberCard{
    text-align: center;
    line-height: 20vw;
    font-size: 30px;
  }
   /* .detailMember{
    display: inline-block;
    margin-top: 6px;
    
    font-weight: 400;
    
  }
  .detailMember p{
    padding:2px;
  } */

</style>