<template>
  <PageHeader/>
  <div class="Board">
    <div class="Board-Content">
      <h2 class="menu-title">&#60;게시물 작성&#47;&#62;</h2>
      <div class="board-container">
        <div class="board-form">
            <div class="board-item">
                <p style = "font-size : 18px">파일</p>
                <input type = "file" name="image" @change="onFileChange"> 
            </div >
          <div class="submitBox">
            <button class="submit" @click="uploadData">등록</button>
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
  components :{
    PageHeader,
    PageFooter,
  },
  data(){
    return {
      selectedFile : null,
    };
  },
  methods: {
      onFileChange(event){
        this.selectedFile = event.target.files[0];
      },
      uploadData(){
        const url = '/api/notice/writeNotice3'

        const formData = new FormData();
        formData.append('image', this.selectedFile);
          
        axios
            .post(url, formData,{
                headers : {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                console.log('파일 업로드 성공!');
                console.log(res.data);
            })
            .catch((error) => {
                console.error('파일 업로드 실패', error);
            });
      },
  },
};
</script>

<style scoped>
  .Board-Content{
      padding-top: 100px;
  }
  .Board{
    background-color: #F2F2F2;
    width : 100%;
    height: 1024px;
  }
  .menu-title {
    font-size: 40px;
  }
  .board-container{
    margin-top : 50px;
    display: flex;
    justify-content: center;
  }
  .board-form{
    width : 1000px;
    height: 700px;
    background: white;
    padding-top: 10px;
    border-radius: 10px;
  }
  .board-item{
    display: flex;
    margin: 30px;
  }
  .board-item p {
    width: 100px;
    height: 40px;
    margin-top : 5px;
    margin-right: 30px;
    font-size: 20px;
  }
  .board-item select{
    width: 300px;
    height: 40px;
    border: 2px solid #9F9D9C;
    border-radius: 10px;
    background-color: white;
    color: #555;
    font-size: 18px;
    padding: 5px;

  }
  .board-item input[type="text"]{
    width: 800px;
    border-radius: 10px;
    border: 2px solid #9F9D9C;
  }
  .board-item textarea{
    width : 800px;
    height : 250px;
    border-radius: 10px;
    border: 2px solid #9F9D9C;
    font-size: 15px;
  }
  .submit{
    background-color: #008D39;
    color : white;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    border:none;
    margin-left: auto;
    font-size: 18px;
    font-weight: 600;
  }
  .submitBox{
    display: flex;
    flex-direction: column; /* 세로 방향으로 요소 정렬 */
    align-items: flex-start;
    padding-right: 30px;
  }
  
</style>