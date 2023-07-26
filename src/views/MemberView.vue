<template>
    <PageHeader/>
    <div class="Member">
        <div class="Member-Content">
        <h1>&#60;Team Tag Member&#47;&#62;</h1>
        </div>
        <div class="CardBundle">
            <div class="MemberCard">
              <img src="@/assets/맹구.jpg" alt="">
              <div class="memberimage">
                <span id="memberName">맹구</span>
                <p>나는 돌</p>
              </div>
            </div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
            <div class="MemberCard"><div class="memberimage"></div></div>
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
    justify-content: center;
  }
  .CardBundle{
   
    width: 100vw; margin-top:3%;
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
  }
  #memberName{
      padding: 10px;
      font-weight: 600;

  }
  .MemberCard img{
    margin-top: 10px;
    width: 10vw;
    border-radius: 5px;
  }
  
</style>