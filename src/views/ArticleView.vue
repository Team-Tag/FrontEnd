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
              <div class = "createdDate"><p>등록일 : {{notice.writeTime}}</p></div>
              <div class = "updateDate"><p>수정일 : {{notice.modifyTime}}</p></div>
            </div>
            <div class = "viewCount"><p>조회수 : {{notice.viewCount}}</p></div>
          </div>
        </div>
        <div class="board-body">
          <img :src= "notice.imageUrl">
          <div class = "contents">
            <p v-html= "convertToHTML(notice.contents)"></p>
            <p>{{notice.link}}</p>
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
import axios from 'axios';
export default {
  data(){
    return{
      notice : [],
    };
  },
  created() {
    const noticeId = this.$route.params.id; // 라우터에서 현재 게시물 ID 가져오기
    this.fetchNoticeData(noticeId); // 서버로부터 해당 ID의 게시물 정보 가져오기
  },
  components :{
    PageHeader,
    PageFooter,
  },
  methods :{
    convertToHTML(text) {
        // 개행 문자를 <br> 태그로 변환하여 반환
        return text.replace(/\n/g, '<br>');
    },
     fetchNoticeData(noticeId) {
      // 서버로부터 해당 ID의 게시물 정보를 요청하는 함수
      axios.get(`/api/notice/${noticeId}`)
        .then(response => {
          this.notice = response.data; // 받아온 데이터를 notice 변수에 저장
        })
        .catch(error => {
          console.error('Error fetching notice:', error);
        });
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