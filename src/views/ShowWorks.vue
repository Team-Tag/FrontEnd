<template>
    <PageHeader/>
    <div class="Works">
      <div class="Works-Content">
        <h1 id="Works">&#60;Works of Team Tag&#47;&#62;</h1>
         <div class="CardShow">
                <div class="WorksCard" v-for="(image,index) in arr1" :key="index" @click="ClickImage(image)" 
                :style="{ 'background-image': 'url(' + require(`@/assets/${image.url}`) + ')'}">
                  <div class="worksNameUp">
                    <div class="WorksImage" >
                        <p class="WorksName">{{image.name}}</p>
                    </div>
                  </div>
                </div>
        </div>
        <div>
          <div class="container">
              <div class="list">
                    <div class="item">
                    This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    
              </div>
              <div class="list">
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  
              </div>
          </div>
        </div>
        <div class="CardShow">
                <div class="WorksCard" v-for="(image,index) in arr2" :key="index" @click="ClickImage(image)" 
                :style="{ 'background-image': 'url(' + require(`@/assets/${image.url}`) + ')'}">
                  <div class="worksNameUp">
                    <div class="WorksImage" >
                      
                        <p class="WorksName">{{image.name}}</p>
                    </div>
                        
                  </div>
                </div>
        </div>
      </div>
    </div>
     <div class="modal" v-if="isModalOpen == true" @click="closeModal" >
        <div class="WorkModal"  
        :style="{ 'background-image': 'url(' + require(`@/assets/${clickWorksUrl}`) + ')'}">
        </div>
        <div class="WorkArticle">
          <div class="WorkArticle-box">
              <p id="p1">{{clickWorksName}}</p>
              <p id="p2">{{clickWorksArtice}}</p>
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
  },
  mounted(){
  },
  data(){
    return{
      positionX: 0, // 초기 위치 (x 좌표)
      speed: 2, // 이동 속도 (1프레임당 이동할 거리)
      isModalOpen : false,
      clickWorksName:'',
      clickWorksUrl:'',
      clickWorksArtice:'',
            arr1:[
            {name:'세계문자박물관',article:'이 사이트는 세계문자박물관입니다.',url:'web1.png'},
            {name:'로니콜먼',article:'이 사이트는 로니콜먼',url:'로니콜먼.webp'},
            {name:'짱구',article:'이 사이트는 짱구',url:'짱구.webp'},
            {name:'도라애몽',article:'이 사이트는 도라애몽',url:'도라애몽.png'},
            {name:'루피',article:'이 사이트는 루피',url:'루피.png'},
            {name:'강인',article:'이 사이트는 강인',url:'강인.jpg'}
            ],
            arr2:[
            {name:'김민재 ',
            article:'2022-23 시즌 기준으로 뛰어난 피지컬과 신체 능력에 기반한 경합 능력, 수비 기술, 날카로운 예측력과 집중력을 바탕으로 센터백에게 요구되는 다양한 방면에서 월드클래스의 기량을 보여준다. 스탠딩 태클, 슬라이딩 태클, 경합 등 대인 수비뿐만 아니라 지능적인 위치 선정을 바탕으로 패스 차단과 슛 블로킹, 오프사이드 라인 커맨딩 등 수비수라면 갖춰야 할 필수적인 능력들 모두 토탈 패키지로 갖췄다. 육중한 체격에 비해 발도 순간 최고 35km/h[1]로 굉장히 빠르고 최고 시속에 도달하는 가속도도 빠르다. 거기에 순발력도 좋으며 프로 데뷔 이후 2kg 정도 벌크업에 성공해 튼튼한 어깨와 견갑골, 상체근육과 함께 전반적인 피지컬과 몸싸움 능력이 매우 좋아졌다. 그래서 피지컬이 좋은 선수들과의 경합에서도 쉽게 밀리지 않는다. 오히려 SSC 나폴리로 이적해서는 안드레아 페타냐, 치로 임모빌레, 세르게이 밀린코비치사비치, 태미 에이브러햄, 로멜루 루카쿠, 올리비에 지루 등 건장한 체격을 가진 선수들을 능가하는 등 2022-23 시즌 세리에 A에서도 탑 클래스의 피지컬을 뽐냈다.[2]',
            url:'김민재.jpg'},
            {name:'릴러말즈',article:'이 사이트는 릴러말즈',url:'릴러말즈.jpg'},
            {name:'피카츄',article:'이 사이트는 피카츄',url:'피카츄.jpg'},
            {name:'미키마우스',article:'이 사이트는 미키마우스',url:'미키마우스.jpg'},
            {name:'뽀로로',article:'이 사이트는 뽀로로',url:'뽀로로.jpg'},
            {name:'영남회장',article:'이 사이트는 영남회장',url:'영남회장.jpeg'},
            ]
    }

  },
  methods:{
    ClickImage(image){
      console.log(`너는 ${image.name}를 클림함`)
      this.clickWorksName=image.name;
      this.clickWorksUrl=image.url;
      this.clickWorksArtice=image.article
      
      this.ModalOpen(image)
              

     
    },
    ModalOpen(){
        this.isModalOpen=true;
        
    },
    closeModal(){
      this.isModalOpen=false;
      console.log("closeModal")
    }
  }
};


</script>
<style scoped>
  h1{
    font-weight: 800;
    text-align: left;
    margin-left: 35px;
  }

  .CardShow{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-left: 30px;
  } 
  .Works-Content{
      padding-top: 100px;
  }
  .Works{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
    justify-content: center;
  }
  
  
  
   .WorksCard{
      height: 25%; 
      flex-wrap: wrap;
      margin: 20px;
      border-radius: 20px; 
      box-shadow: 4px 4px 4px gray;
      align-content: center; 
      border-radius: 5px;
      background-size: cover;
    
  } 
  .WorksCard:hover{
    box-shadow: 10px 10px 10px gray;

  } 
  
  .WorksCard:hover .WorksName{
    display:block;
  }
  .WorksCard:hover .WorksImage{
        background-color: #0000005a;
        
    
  }

  .WorksImage{
    
    margin: auto;
    text-align: center;
    border-radius: 5px;
    width: 12vw; height: 12vw;
   
  }
  .WorksName{
    display: none;
    font-size: 25px;
    color: #ffffff;
    opacity: 150%;
    position: relative;
    top: 35%;
    font-weight: 500;
  }

  .aboutWorks{
    
    text-align: center;
    
  }
 

  .container {
  display: flex;
  white-space: nowrap;
}

.list {
  display: flex;
  font-size: 3vw;
  -webkit-animation: loop 0s infinite linear;
  animation: loop 70s infinite linear;
}

.item {color: #000000;}

@keyframes loop {
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.modal{
  position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  
}

  .modal.show {
    display: block;
    }
  .WorkModal{
    margin-top:60px;
    width: 400px;
    height: 400px;
    border-radius: 10px 0px 0px 10px;
    background-size: cover;
  }
  .WorkArticle{
    margin-top:60px;
    width: 400px;
    height: 400px;
    background-color: rgba(40, 40, 40, 0.719);
    top: 40px;
    align-content: center;
    overflow: hidden;
    border-radius: 0px 10px 10px 0px;
  }
  
  .WorkArticle p{
    margin:40px 0px 30px 0px;
    color: #F2F2F2  ;
    overflow: hidden;
  }
  #p1{
    margin-top: 10%;
    font-size: 20px;
  }
  #p2{
    margin-top: 10%;
  }
</style>