<template>
  <PageHeader/>
  <div class="Board">
    <h2 class="menu-title">{{ $route.params.name}}</h2>
    <div class="article-box">
        <div class="article-image" :style="{ 'background-image': 'url(' + require(`@/assets/${$route.params.url }`) + ')' }"></div>
       <p class="article-text">{{ $route.params.article }}</p>
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
      board:{
        category : '',
        title : '',
        contents : '',
        link : '',
      },
    };
  },
  methods: {
      onFileChange(event){
        this.selectedFile = event.target.files[0];
      },
      async uploadData(){
        try{
          const url = '서버 URL'
          const jsonData = {
            category: this.board.category,
            title: this.board.title,
            contents: this.board.contents,
            link: this.board.link,
          };
          const formData = new FormData();
          formData.append('data', JSON.stringify(jsonData));
          formData.append('file', this.selectedFile);

          console.log('jsonData:', jsonData);
          console.log('formData:', formData); 

          const response = await axios.post(url, formData,{
            headers:{
              'Content-Type':'multipart/form-data',
            },
          });
          console.log('서버 응답:',response.data);
        }catch(error){
          console.error('에러 발생:', error);
        }
      },
  },
};
// import '@/assets/font.css'

</script>

<style scoped>
/* *{font-family: 'NeoDunggeunmoPro-Regular';} */

  .Board-Content{
      
  }
  .Board{
    margin-top: 70px;
    background-color: #F2F2F2;
    
    width : 100%;
    height: 2500px;
    align-content: center;
  }
  .menu-title {
   padding-top: 40px;
    font-size: 40px;
  }
  .article-box{
    display:block;
    margin-top: 30px;
    text-align: center;
    margin:0 auto;
    width: 70%;
  }
  .article-image{
    /* margin:30px 0px 30px 0px; */
    margin:0 auto;
    width: 30vw; height: 40vh;
    background-size: cover;
    margin-top:40px;
    margin-bottom: 40px;
   
  }
  .article-box p{
    font-size: 25px;
  }
  .article-text {
  white-space: pre-line;
}
</style>