<template>
    <header :class= "isHomePage ? 'home-header' : 'default-header'">
        <router-link to='/' class = "header-logo" v-if = "isHomePage">
            <img src = "@/assets/LogoWhite.png">
        </router-link>
        <router-link to='/' class = "header-logo" v-else >
            <img src = "@/assets/LogoBlack.png">
        </router-link>
        <div class = "header-menu">
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'" >
                <router-link to='/' >
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/Home.svg" >
                    </div>
                    <span>홈</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to='/'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/alarm.svg" >
                    </div>
                    <span>공지</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/LoadMap'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/LoadMap.svg">
                    </div>
                    <span>로드맵</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to ='/ShowWorks'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <i class="fa-solid fa-panorama"></i>
                    </div>
                    <span>작품</span>
                </router-link>
            </div>
             <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/Schedule'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <span>일정</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/Schedule'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <i class="fa-solid fa-question"></i>
                    </div>
                    <span>질문</span>
                </router-link>
            </div>

        </div>
    </header> 
    <div class="modal" v-if="isModalOpen == true" @click="closeModal">  <!--이 영역은 header밑의 영역  -->
			<div class="modal_body" @click.stop>
				<div class="login-box-in">
					<form name="login" method="post" action="">
						<div style="font-size:35px">&lt;로그인/&gt;</div>
						<div class="login-porm">
							<p>이메일(아이디)</p>
							<input type="text" name="userid" v-model="userid">
							<p>비밀번호</p>
							<input type="password" name="passwd" v-model="passwd">
							<input type="submit" value="로그인" style="color : white;
									background-color : green; border: 0.5px solid green;" @click="submitLogin">
							<div>
								<span style="color : gray">회원가입 원한다면?</span>
								<router-link to='/SignUp' style="color : green" @click="closeModal">회원가입</router-link>
							</div>
						</div>					
					</form>
				</div>
			</div>
		</div>
</template>

<script>

export default{
    name: 'PageHeader',
    data(){
        return{
            isModalOpen : false,
            userid : "",
            passwd : "",
        };
    },
    methods:{
        async submitLogin() {
        try {
            const response = await this.$axios.post('/api/login2', {    
                userid: this.userid,
                passwd: this.passwd,

            }, {
                headers: {
                'Content-Type' :'application/json',
                 Authorization:"token"
                },
            });
            this.$store.commit('token',response.data.token);
            // 로그인이 성공적으로 처리된 경우 서버의 응답을 확인하고 필요한 작업 수행
            console.log('로그인 성공!');
            console.log(response.data); // 서버로부터 받은 응답 데이터

            // 예를 들어, 로그인이 성공한 경우 특정 페이지로 리다이렉션하거나 상태를 관리할 수 있습니다.
            // this.$router.push('/dashboard'); // 대시보드 페이지로 리다이렉션

        } catch (error) {
            // 로그인이 실패한 경우 에러 처리
            console.error('로그인 실패!');
            console.error(error);
            
            // 예를 들어, 에러 메시지를 사용자에게 표시할 수 있습니다.
            // this.errorMessage = '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.';
        }
        },
        closeModal(){
            this.isModalOpen = false;
        },
    },
    computed: {
        isHomePage() {
            // 현재 페이지가 홈 페이지인지 확인
            return this.$route.path === '/';
            },
    },

};
</script>

<style scoped>
/*header.css*/
.header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
}
.home-header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
}
.default-header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
    background-color: white;
}

.header-logo{
    display: flex;
    align-items: center;
    margin : 0 0 0 10px;
}
.header-logo img{
    width : 200px;
    height : 60px;
}

.home-menu-icon i{
    font-size: 25px;
    color : white;
    margin-top: 3px;
    margin-bottom: 7px;
    
}
.home-menu-icon img{
    width:30px;
    height: 30px; 
    filter: brightness(0) invert(1); 
}
.menu-icon i{
    font-size: 25px;
    color : #9F9D9C;
    margin-top: 3px;
    margin-bottom: 7px;
}
.menu-icon img{
    width:30px;
    height: 30px; 
}

.header-menu{
    display : flex;
    padding-top : 5px;
}
.menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}
.home-menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}

.home-menu-item span{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: white;
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
}
.menu-item span{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #9F9D9C;
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
}
a{
    text-decoration: none;
}

/*login.css*/
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
    background-color: rgba(0, 0, 0, 0.4);
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

	transform: translateX(-50%) translateY(-50%);
  }
</style>
