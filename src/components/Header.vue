<template>
    <header class = "main-header">
        <router-link to='/' class = "header-logo">
            <img src = "@/assets/LogoBlack.png">
        </router-link>
        <div class = "header-menu">
            <div class = "header-main-menu-item" >
                <router-link to='/' >
                    <div class="menu-icon"><img src = "@/assets/Home.svg" ></div>
                    <span>홈</span>
                </router-link>
            </div>
            <div class = "header-main-menu-item">
                <router-link to='/Message'>
                    <div class="menu-icon"><img src = "@/assets/message.svg" ></div>
                    <span>메시지</span>
                </router-link>
            </div>
            <div class = "header-main-menu-item">
                <router-link to='/'>
                    <div class="menu-icon"><img src = "@/assets/alarm.svg" ></div>
                    <span>알림</span>
                </router-link>
            </div>
            <div class = "header-main-menu-item">
                <router-link to = '/LoadMap'>
                    <div class="menu-icon"><img src = "@/assets/LoadMap.svg" ></div>
                    <span>로드맵</span>
                </router-link>
            </div>
            <div class = "header-main-menu-item">
                <router-link to ='/Board'>
                    <div class="menu-icon"><img src = "@/assets/Q&A.svg" ></div>
                    <span>게시판</span>
                </router-link>
            </div>
             <div class = "header-main-menu-item">
                <router-link to = '/Member'>
                    <div class="menu-icon">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <span>멤버</span>
                </router-link>
            </div>
             <div class = "header-main-menu-item">
                <router-link to = '/Schedule'>
                    <div class="menu-icon">
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <span>일정</span>
                </router-link>
            </div>
             <div class = "header-main-menu-item">
                <div @click="isModalOpen=true">
                    <div class="menu-icon">
                        <i class="fa-solid fa-circle-user"></i>
                    </div>
                    <span>로그인</span>
                </div>
            </div>
        </div>
    </header> 
    <div class="modal" v-if="isModalOpen == true" @click="closeModal">
			<div class="modal_body" @click.stop>
				<div class="login-box-in">
					<form name="login" method="post" action="">
						<div style="font-size:35px">&lt;로그인/&gt;</div>
						<div class="login-porm">
							<p>이메일(아이디)</p>
							<input type="text" name="userid">
							<p>비밀번호</p>
							<input type="password" name="passwd">
							<input type="submit" value="로그인" style="color : white; 
									background-color : green; border: 0.5px solid green;">
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

export default ({
    name: 'PageHeader',
    data(){
        return{
            isModalOpen : false,
        };
    },
    methods:{
        closeModal(){
            this.isModalOpen = false;
        },
    },
    props: {
    headerClass: String, // 헤더의 클래스를 받아오는 프로퍼티
    headerLogo: String   // 헤더의 로고를 받아오는 프로퍼티
  },

})
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
.main-header{
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

.main-menu-icon i{
    font-size: 25px;
    color : white;
    margin-top: 3px;
    margin-bottom: 7px;
}
.main-menu-icon img{
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
.header-menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}
.header-main-menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}
.header-menu-item span{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: white;
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
}
.header-main-menu-item span{
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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
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
