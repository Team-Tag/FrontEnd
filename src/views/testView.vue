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
      <video muted autoplay loop>
        <source src="@/assets/screen1.mp4" type="video/mp4">
        <strong>Your browser does not support the video tag.</strong>
      </video>
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            우리는
          </p>
          
          <ul class="content__container__list">
            <li class="content__container__list__item">Team</li>
            <li class="content__container__list__item">Tag</li>
            <li class="content__container__list__item">JMT</li>
            <li class="content__container__list__item">C ·AERANG</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="screen2" ref = "s2">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>Tag팀은 무엇을 하나요?</h2>
          <p>'Tag' 는 웹(WEB)프로그램의 전반적인 흐름을 이해
          하기 위해 HTML, CSS, JavaScript 등을 통해 웹
          (WEB)프로그램 제작 및 설계 과정을 학습합니다.
          씨애랑에서 제공하는 다양한 커리큘럼을 통해 프론트
           엔드 및 백엔드 역량을 강화할 수 있습니다</p>
        </div>
        <div class = "screen2-item2">
          <img src = "@/assets/screen2.jpg">
        </div>
      </div>
    </section>
    <section class="screen3" ref = "s3">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>어떻게 활동 하나요?</h2>
          <p>'Tag' 는 웹(WEB)프로그램의 전반적인 흐름을 이해하기 위해 HTML,
          CSS, JavaScript 등을 통해 웹(WEB)프로그램 제작 및 설계 과정을 학습합니다. 
          씨애랑에서 제공하는 다양한 커리큘럼을 통해 프론트 엔드 및 백엔드 역량을 강화할 수 있습니다</p>
        </div>
          <swiper
            :slidesPerView="'auto'"
            :centeredSlides="true"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
          </swiper>
      </div>
    </section>
    <section class="screen4" ref = "s4">
      <div class="content-wrapper" style = "flex : 1;">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>때로는 놀기도 하는!</h2>
          <p>저희는 가끔 모여서 놀기도 합니다ㅎㅎ</p>
        </div>
        <div class = "screen4-item2"> 
          <!-- 슬라이더 -->
        </div>
      </div>
      </div>
      <PageFooter/>
    </section>
  </div>
  
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PageFooter,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      activeSection: 's1',
    }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    new Swiper('.swiper-container', {
      centeredSlides: true, // 슬라이드를 가운데로 정렬
      slidesPerView: 'auto', // 자동으로 슬라이드 개수를 조절하여 가운데 정렬
    });
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
<style scoped lang="scss">
  .home{
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }
  section{
    width : 100vw;
    height : 100vh;
  }
  .screen1{
    overflow: hidden;
    margin: 0px auto; 
    position: relative;
  }

  .screen2{
    background-image: url("@/assets/BackImg1.jpeg");
    display: flex;
    
    align-items: center;
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
    left : 35px;
  }
  #s2:hover{
    position: absolute;
    left : 35px;
  }
  #s3:hover{
    position: absolute;
    left : 35px;
  }
  #s4:hover{
    position: absolute;
    left : 35px;
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
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size : 25px;
  }
  .p{
    width: 100px;
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
  .screen-content{

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 300px;
  }
  .screen-content .screen-item{
    margin : 20px 20px 20px 20px;
    height: 40vh;
  }
  .screen-item h2{
    font-size: 4.5vh;
    margin-bottom: 80px;
    text-align: left;
    color : white;
  }
  .screen-item p{
    font-size: 25px;
    text-align: left;
    color : white;
    width : 50vh;
  }
  .screen-content .screen2-item2{
    margin: 20px;
  }
  .screen2-item2 img{
    width: 700px;
    height: 400px;
   
  }
  video{
    width : 100vw;
    height : 100vh;
    object-fit: fill;
  }

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  height: 160px;
  overflow:hidden;
  
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;
  
  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 40px;

    &:before {
      content: '[';
      left: 0;
    }

    &:after {
      content: ']';
      position: absolute;
      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #16a085;
      font-size: 42px;
      line-height: 40px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 110px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

/* 슬라이더 */
.card-container {
  display: flex;
  overflow-x: hidden;
}

.card {
  flex: 0 0 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h3 {
  font-size: 18px;
  margin: 10px 0;
}

.card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/*swiper css 코드*/

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 60%;
}

.swiper-slide:nth-child(2n) {
  width: 40%;
}

.swiper-slide:nth-child(3n) {
  width: 20%;
}
</style>

