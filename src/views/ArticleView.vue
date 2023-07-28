<template>
  <PageHeader/>
  <div class="Board">
    <div class="container">
      <div  class="menu-title">
        <h2>&#60;상세 게시판&#47;&#62;</h2>
      </div>
      <div class="board-contents">
        <div class="board-header">
          <div class = "boardTitle"><p>{{title}}</p></div>
          <div class = "board-items">
            <div class = "boardDate">
              <div class = "createdDate"><p>등록일 : {{createdDate}}</p></div>
              <div class = "updateDate"><p>수정일 : {{updateDate}}</p></div>
            </div>
            <div class = "viewCount"><p>조회수 : {{viewCount}}</p></div>
          </div>
        </div>
        <div class="board-body">
          <img src="@/assets/backEnd.jpeg">
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
        title : "씨애랑 하계 워크샵 안내",
        createdDate : "2023-07-29",
        updateDate : "2023-07-30",
        viewCount : 100,
    }
  },
  components :{
    PageHeader,
    PageFooter,
  },
    
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
    background-color: aquamarine;
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
</style>