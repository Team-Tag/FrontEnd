<template>
  <PageHeader/>
  <div class="home">
    <div class = "scrollMenu">
      <div class = "scrollItem" @click="scrollToElement($refs.s1)">
        <div :class="{ circle: true, activeC: activeSection === 's1' }"></div>
        <p :class="{ p: true, active: activeSection === 's1' }" id = "s1">우리는</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s2)">
        <div :class="{ circle: true, activeC: activeSection === 's2' }"></div>
        <p :class="{ p: true, active: activeSection === 's2' }" id = "s2">무엇을</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s3)">
        <div :class="{ circle: true, activeC: activeSection === 's3' }"></div>
        <p :class="{ p: true, active: activeSection === 's3' }" id = "s3">어떻게</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s4)">
        <div :class="{ circle: true, activeC: activeSection === 's4' }"></div>
        <p :class="{ p: true, active: activeSection === 's4' }" id="s4">때로는</p>
      </div>
      <div class = "bar"></div>
    </div>
    <section class="screen1" ref = "s1">
      <div class="content-wrapper">
        
      </div>
    </section>
    <section class="screen2" ref = "s2">
      <div class="content-wrapper">
        <div>
          <h2>Tag팀은 무엇을 하나요?</h2>
          <p>'Tag' 는 웹(WEB)프로그램의 전반적인 흐름을 이해<br>
          하기 위해 HTML, CSS, JavaScript 등을 통해 웹(WEB)<br>
          프로그램 제작 및 설계 과정을 학습합니다. <br>
          씨애랑에서 제공하는 다양한 커리큘럼을 통해 프론트 엔드 및<br>
           백엔드 역량을 강화할 수 있습니다</p>
        </div>
      </div>
    </section>
    <section class="screen3" ref = "s3">
      <div class="content-wrapper">

      </div>
    </section>
    <section class="screen4" ref = "s4">
      <div class="content-wrapper">

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
  data(){
    return{
      activeSection: 's1',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // 컴포넌트가 파기되기 전에 스크롤 이벤트 리스너 해제
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods : {
    scrollToElement(targetElement){
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    },
     handleScroll() {
      // 현재 스크롤 위치 확인
      const scrollPosition = window.scrollY;

        // 각 섹션의 위치 파악
        // eslint-disable-next-line no-unused-vars
        const s1Position = this.$refs.s1.offsetTop;
        const s2Position = this.$refs.s2.offsetTop;
        const s3Position = this.$refs.s3.offsetTop;
        const s4Position = this.$refs.s4.offsetTop;

        // 현재 활성화된 섹션 확인하여 해당하는 "scrollItem"의 circle과 p의 색상 변경
        if (scrollPosition >= s4Position) {
          this.activeSection = 's4';
        } else if (scrollPosition >= s3Position) {
          this.activeSection = 's3';
        } else if (scrollPosition >= s2Position) {
          this.activeSection = 's2';
        } else {
          this.activeSection = 's1';
        }
    },
  }
};
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
  #s1:hover{
    position: absolute;
    left : 40px;
  }
  #s2:hover{
    position: absolute;
    left : 40px;
  }
  #s3:hover{
    position: absolute;
    left : 40px;
  }
  #s4:hover{
    position: absolute;
    left : 40px;
  }
  .content-wrapper{
    flex : 1;
  }
  .scrollMenu{
    position: fixed;
    top : 40%;
    left: 50px;
    z-index: 2;
    width : 150px;
    height: 50px;
  }
  .scrollMenu .scrollItem{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size : 25px;
  }
  .scrollItem .p.active {
  /* 활성화된 섹션의 p 색상 */
    color: white;
    opacity: 100%;
  } 
  .scrollItem .p{
    color : white;
    opacity: 50%;
  }
  .scrollItem .circle.activeC{
  /* 활성화된 섹션의 circle 색상 */
    background-color : white;
    
  }   
  .scrollItem .circle{
    background-color: #ababab;
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

