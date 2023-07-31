<template>
    <PageHeader/>
     <div class="RoadMap">
        <h2 class="menu-title">&#60;Back-End&#47;&#62;</h2>

        <div class = "RoadMap-container">
          <div class="RoadMap-item">
            <router-link  to="/LoadMap/BackEnd/RoadmapArticle_Back" v-for="(index,imageUrl) in card" :key="imageUrl" class="RoadmapCard" @click="showthis(index)">
                        <!-- 여기서 for돌리면서 해당 index를 바뀔때마다 vuex 상태에 저장하면  -->
                        <img :src="require(`@/assets/${index.url}`)"> 
                        <p class="p1">vue 속성 꿀팁!</p>
            </router-link>
          </div>
        </div>

    </div>
    <PageFooter/>
    
</template>
<script>

import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
// import {mapState,mapMutations} from 'vuex'

export default {
  components :{
    PageHeader,
    PageFooter,
  },
  data(){
    return{ //backend 배열로 새로 저장해야 함 
      card:[],
        // {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:"프론트엔드 개발자로 성장하기 위한 기술과 학습 경로는 다양하며, 개인의 관심사와 목표에 따라 다를 수 있습니다. 하지만 대체적으로 프론트엔드 개발자가 익히면 좋은 기술과 주제들을 아래에 정리해봤습니다. 이는 출발점으로 사용할 수 있는 로드맵이며, 항상 최신 동향을 따라가는 것이 중요합니다.\n 기본 웹 기술: \n HTML, CSS, JavaScript 기초DOM(Document Object Model) 이해 \n 프레임워크/라이브러리: \nVue.js, React, Angular 등의 프론트엔드 프레임워크 또는 라이브러리 학습 \n컴포넌트 기반 아키텍처 이해 \n상태 관리: \nVuex (Vue.js), Redux (React) 등의 상태 관리 라이브러리 이해 \n패키지 매니저 및 번들러: \nnpm 또는 yarn을 사용한 패키지 관리 \nWebpack, Parcel 등의 번들러 이해 \n프론트엔드 테스팅: \nest, Mocha, Cypress 등의 테스팅 도구 학습 \nCSS 프리프로세서 및 PostCSS: \nSass, Less 등의 CSS 프리프로세서 학습 \nPostCSS의 기능 이해 \n반응형 디자인: \n미디어 쿼리(Media Queries)를 사용한 반응형 웹 디자인 이해 \n프론트엔드 빌드 및 배포: \n프로덕션 환경에서의 코드 최적화와 번들링 \nCDN(Content Delivery Network)을 통한 배포협업 도구:",
        // index:0},
        //  {
        //   title:'javascript',
        //   person:'노기훈',
        //   url:'web1.png',
        //   article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //   index:1
        // }
       //이거 여기 컴포넌트에도 저장 가능하고 vuex에도 가능 근데 많은 데이터를 왔다갔다 하면 조금 시간이 걸릴거 같으니 count만 vuex로 해결
        // {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:"프론트엔드 개발자로 성장하기 위한 기술과 학습 경로는 다양하며, 개인의 관심사와 목표에 따라 다를 수 있습니다. 하지만 대체적으로 프론트엔드 개발자가 익히면 좋은 기술과 주제들을 아래에 정리해봤습니다. 이는 출발점으로 사용할 수 있는 로드맵이며, 항상 최신 동향을 따라가는 것이 중요합니다.\n 기본 웹 기술: \n HTML, CSS, JavaScript 기초DOM(Document Object Model) 이해 \n 프레임워크/라이브러리: \nVue.js, React, Angular 등의 프론트엔드 프레임워크 또는 라이브러리 학습 \n컴포넌트 기반 아키텍처 이해 \n상태 관리: \nVuex (Vue.js), Redux (React) 등의 상태 관리 라이브러리 이해 \n패키지 매니저 및 번들러: \nnpm 또는 yarn을 사용한 패키지 관리 \nWebpack, Parcel 등의 번들러 이해 \n프론트엔드 테스팅: \nest, Mocha, Cypress 등의 테스팅 도구 학습 \nCSS 프리프로세서 및 PostCSS: \nSass, Less 등의 CSS 프리프로세서 학습 \nPostCSS의 기능 이해 \n반응형 디자인: \n미디어 쿼리(Media Queries)를 사용한 반응형 웹 디자인 이해 \n프론트엔드 빌드 및 배포: \n프로덕션 환경에서의 코드 최적화와 번들링 \nCDN(Content Delivery Network)을 통한 배포협업 도구:",
        // index:0},
        //  {
        //   title:'javascript',
        //   person:'노기훈',
        //   url:'web1.png',
        //   article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //   index:1
        // },
        //  {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // ,index:2},
        //  {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // ,index:3},
        //  {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // ,index:4},
        // {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // ,index:5},
        // {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // ,index:6},
        // {title:'javascript',
        // url:'web1.png',
        // person:'노기훈',
        // article:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        // index:7},
          // imageUrl:'',//이미지 url을 저장할 데이터 변수 
          // imageName:''//가져올 이미지 파일 명  .jpg
      
     
    }
  },
  async mounted(){
    //url을 어떻게 해야할까 이름만 받아와서 이름.jpg해도 되긴한데 png도 있으니 url도 있는게 좋을거 같음 
     //this.$axios.get('/api/board/backlist')
    try {
      const response = await this.$axios.get("/api/board/backlist");
      this.card = response.data;
      console.log(response.data);
      console.log(this.card);
      console.log("성공적으로 데이터를 불러왔습니다.");
    } catch (error) {
      console.log("에러: " + error);
    }
    //  .then((response)=>{
    //     this.card=response.data;
    //     console.log("이거는 response.data")

    //      console.log(response.data);
    //     console.log("밑에는 this.card")
    //     console.log(this.card);
    //     console.log("성공적으로 데이터를 불러왔습니다.")
    //  })
    //  .catch((error)=>{
    //   console.log("에러"+error);
    //  })
   }
  //computed:{
    // ...mapState(['viewCountUpBack'])//상태변화 시키는 mutation호출 
 // }
  ,methods:{
    //vuex의 mutations를 해당 컴포넌트의 methods 속성에 매핑 
    // ...mapMutations(['VIEW_COUNT_UP_BACK']),

    showthis(index){
      //카드 클릭시 다음 페이지로 넘길 데이터 정의 라우터 푸시로 넘김 
      // this.VIEW_COUNT_UP_BACK(index.index);//상태변경 함수에 인덱스 전달 -> 해당 인덱스의 카운트 증가 
      this.$router.push({ name: 'BackendRoadmapArticle', params: { title: index.title,  url:index.url,  article:index.article } });
      //index:index.index
   }
   
}};
import '@/assets/font.css';
</script>

<style scoped>

 .RoadMap{
    background-color: #F2F2F2;
    width : 100%;
    height: 1524px;
    padding-top: 100px;

  }
  .menu-title {
    font-size: 40px;
  }
 
  .RoadMap-container{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    height: 1024px;

  }
   .RoadMap-item{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 20px;
    margin-bottom: 30px;
   }
  .RoadMap-router{
    /* display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 20px;
    margin-bottom: 30px; */
  }
  .RoadmapCard{
    width: 13vw;
    height: 250px;
    background-color: white;
    margin: 0px 40px 50px 40px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
    overflow: hidden;
  }
  .RoadmapCard:hover{
    box-shadow: 10px 10px 10px gray;
  }
  .RoadmapCard img{
    width : 11vw;
    height : 120px;
    border-radius: 20px;
    margin: 10px 10px;
  }
  .RoadmapCard p{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  .RoadmapCard p:visited { color:black; }
  .p1{
    color:black; 
  }
</style>