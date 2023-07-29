<template>
  <PageHeader/>
  <div class="home">
    <div class = "scrollMenu">
      <div class = "scrollItem" @click="scrollToElement($refs.s1)"><div class= "circle"></div><p id = 'p'>우리는</p></div>
      <div class = "scrollItem" @click="scrollToElement($refs.s2)"><div class= "circle"></div><p id = 'p'>무엇을</p></div>
      <div class = "scrollItem" @click="scrollToElement($refs.s3)"><div class= "circle"></div><p id = 'p'>어떻게</p></div>
      <div class = "scrollItem" @click="scrollToElement($refs.s4)"><div class= "circle"></div><p id = 'p'>때로는</p></div>
      <div class = "bar"></div>
    </div>
    <section class="screen1" ref = "s1">
      <div class="content-wrapper">
        
      </div>
    </section>
    <section class="screen2" ref = "s2">
      <div class="content-wrapper">
        <!-- Content of screen3 goes here -->
      </div>
    </section>
    <section class="screen3" ref = "s3">
      <div class="content-wrapper">
        <!-- Content of screen3 goes here -->
      </div>
    </section>
    <section class="screen4" ref = "s4">
      <div class="content-wrapper">
        <!-- Content of screen3 goes here -->
      </div>
      <PageFooter/>
    </section>
  </div>
  
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PageFooter,
  },
  methods : {
    scrollToElement(targetElement){
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }
  section{
    width : 100%;
    height : 100vh;
  }
  .screen1{
    background-color: rgb(52, 76, 129);
  }
  .screen2{
    background-image: url("@/assets/BackImg1.jpeg");
  }
  .screen3{
    background-image: url("@/assets/BackImg2.jpeg");
  }
  .screen4{
    background-image: url("@/assets/BackImg3.jpeg");
    display: flex;
    flex-direction: column;
  }
  .content-wrapper{
    flex : 1;
  }
  .scrollMenu{
    position: fixed;
    top : 40%;
    left: 50px;
    z-index: 2;
    width : 100px;
    height: 50px;
  }
  .scrollMenu .scrollItem{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size : 25px;
  }
  #p{
    color : white;
    opacity: 50%;
  }
  #visibleP{
    color : white;
    opacity: 100%;
  }
  .circle{
    background-color: #ababab;
    width : 20px;
    height: 20px;
    border-radius: 50px;
    margin-right: 10px;
    z-index: 2;
  }
  .visibleC{
    background-color: white;
    width : 20px;
    height: 20px;
    border-radius: 50px;
    margin-right: 10px;
    z-index: 2;
  }
  .scrollMenu .bar{
    z-index : 1;
    width: 2px;
    height: 150px;
    background-color:#F6F6F6;
    opacity: 50%;
    position: absolute;
    top : 20px;
    left: 9px;
  }
</style>

