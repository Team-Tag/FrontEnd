<template>
    <footer :class= "isHomePage ? 'home-footer' : 'footer'">
        <div>
            <p>(24252)강원특별자치도 춘천시 한림대학길 1</p>
            <p>대표 033-248-1000</p>
            <p>HALLYM UNIVERSITY C · AERANG TEAM TAG</p>
        </div>
        <button @click="isModalOpen=true">관리자 모드</button>
        <div class = "modal" v-if="isModalOpen == true" @click="closeModal" >
          <div class="modal_body" @click.stop>
            <div class="login-box-in">
                <div style="font-size:35px">&lt;로그인/&gt;</div>
                <div class="login-porm">
                  <p>관리자아이디</p>
                  <input type="text" name="userid" v-model="userid">
                  <p>비밀번호</p>
                  <input type="password" name="passwd" v-model="passwd">
                  <button class = "submit-button" @click="submitLogin">로그인</button>
                </div>					
            </div>
          </div>
        </div>  
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    data(){
       return{
      isModalOpen : false,
      
    };
    },
    computed: {
        isHomePage() {
            // 현재 페이지가 홈 페이지인지 확인
            return this.$route.path === '/';
        },
    },
    methods:{
      closeModal(){
        this.isModalOpen=false;
      },
      submitLogin(){
        if(this.userid == "admin" && this.passwd == "1234"){
          this.isModalOpen=false
          console.log("로그인 완료");
          this.postLogin(this.userid,this.passwd)
          }
      },
      postLogin(id,passwd){
        let arr=[id,passwd];
        const jsonData=JSON.stringify(arr);
        this.$axios.post("",jsonData,{headers:{
          'Content-type':'application/json'
        }}).
        then((res)=>{
          console.log(res);
          console.log("성공");
        }).
        catch((e)=>{
          console.log(e+"어림없쥐~");
        })
        ;
      }
    }
};
</script>

<style>
  .footer{
    width: 100%;
    height: 100px;
    background-color: white;
    padding: 10px 20px 20px 20px;
    text-align: left;
  }
  .home-footer{
    width: 100%;
    height: 100px;
    background-color: black;
    padding: 10px 20px 20px 20px;
    text-align: left;
    opacity: 50%;
  }
  .footer p{
    color : #9F9D9C;
  }
  .home-footer p{
    color : white;
  }
  button{
    background-color: rgb(237, 237, 237);
  }
  /*모달창*/
  .login-box-out {
	height : 400px;
	padding : 24px;
	text-align : center;
	margin-bottom : 20px;
	width : 350px;
	background-color : white;
	border-radius: 8px;
	box-shadow: 0 0 8px 0 rgba(0,0,0,0.08);

}


.login-porm{
	margin : 30px 0 0 0;
}

.login-porm input{
	width : 312px;
	height : 40px;
	font-size : 15px;
	border-radius: 8px;
	border: 0.5px solid black; 
	margin : 0 0 30px 0;
}
.submit-button{
  width : 312px;
	height : 40px;
	font-size : 15px;
	border-radius: 8px;
	margin : 0 0 30px 0;
  color : white; 
	background-color : green; 
  border: 0.5px solid green;
}

.login-porm p{
	text-align : left;
	color : gray;
	margin-left: 20px;
	margin-bottom: 10px;
}
.modal {
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 100, 100, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal.show {
	display: block;
  }

  .modal_body {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 350px;
	height: 400px;
	padding: 40px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  z-index: 4;
	transform: translateX(-50%) translateY(-50%);
  }
</style>
