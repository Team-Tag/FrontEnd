<template>
  <PageHeader/>
  <div class="Board">
    <div class="container">
      <div  class="menu-title">
        <h2>&#60;상세 게시판&#47;&#62;</h2>
      </div>
      <div class="board-contents">
        <div class="board-header">
          <div class = "boardTitle"><p>{{notice.title}}</p></div>
          <div class = "board-items">
            <div class = "boardDate">
              <div class = "createdDate"><p>등록일 : {{notice.createdDate}}</p></div>
              <div class = "updateDate"><p>수정일 : {{notice.updateDate}}</p></div>
            </div>
            <div class = "viewCount"><p>조회수 : {{notice.viewCount}}</p></div>
          </div>
        </div>
        <div class="board-body">
          <img src="@/assets/backEnd.jpeg">
          <div class = "contents">
            <p v-html= "convertToHTML(notice.content)"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PageFooter/>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  data(){
    return{
      notice : 
        {
        title : "씨애랑 하계 워크샵 안내",
        createdDate : "2023-07-29",
        updateDate : "2023-07-30",
        viewCount : 100,
        content : "안녕하세요 태그 스터디장 김선우입니다. \n다음 주부터 설레는 씨애랑 워크샵이 시작됩니다.\n우리 태그팀은 아래와 같은 방식으로 진행할 예정입니다.\n\n미션 3개 중 1개 달성하기!!(기간 : ~워크샵 마지막 날까지)\n. MBTI 테스트 웹 페이지 만들기(직접!!)\n. 개인 프로젝트(아무거나 ex. 쇼핑몰, 씨애랑 웹페이지 등)\n. js 강의 듣고 내용 정리해서 깃허브에 올리기\n\n미션들을 준비하시는 과정이 SW전시회에 \n아주 도움이 될 것이라고 확신합니다!\n워크샵 기간에 아마 개인적으로 공부하는 \n시간이 많으실 것입니다. 공부하시면서 어려운 내용은\n서로에게 질문하고 같이 고민하는 시간이 많았으면 합니다!!\n(선배들에게 편하게 질문하기!!!)\n모두 좋은 하루 보내시고 워크샵 때 만나요!!! "
        }
      ,
    }
  },
  components :{
    PageHeader,
    PageFooter,
  },
  methods :{
    convertToHTML(text) {
        // 개행 문자를 <br> 태그로 변환하여 반환
        return text.replace(/\n/g, '<br>');
      }
  }
    
};
</script>

<style scoped>
  .Board{
    background-color: #F2F2F2;
    width : 100%;
    height: 1324px;
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
  .board-container{
    width : 100%;
  }
  .menu-title{
    text-align: center;
    height: 50px;
    margin-bottom: 40px;
  }
  .menu-title h2{
    font-size: 40px;
  }
  .board-contents{
    width: 800px;
    height: 1050px;
    display:block;
    justify-content: center;
    border-top: 5px solid #858181;
    border-bottom: 5px solid #858181;
  }
  .board-header{
    width: 100%;
    height: 150px;
    background-color : #E7E7E7;
    
  }
  .board-items{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin : 20px 20px 20px 20px;
  }
  .boardTitle{
    display: flex;
    font-size: 25px;
    font-weight: 600;
    margin : 0px 20px 40px 20px;
  }
  .boardTitle p{
    margin-top: 10px;
  }
  *{
    margin: 0px;
    padding: 0px;
  }
  .board-body img{
    width: 700px;
    height: 400px;
    margin-top : 20px;
  }
  .board-body p{
    text-align: center;
  }
  .contents{
    width: 800px; 
    display: flex;
  }
  .contents p{
    margin : 20px;
    text-align: left;
    width : 100%;
  }
</style>