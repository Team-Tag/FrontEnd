<template>
    <PageHeader/>
    <div id="detailMember">
        <div class="deitalMember-Content">
            <div class="RotateMember">
                <i @click="imageleft" class="fa-solid fa-chevron-left"></i>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[0]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[1]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[2]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[3]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[4]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[5]}`) + ')' }"></div>
                <div class="RoundMember" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[6]}`) + ')' }"></div>
                <i  @click="imageright" class="fa-solid fa-chevron-right"></i>

            </div>
            <div class="underRotate">
                <div class="leftAbout">
                     <img :src="require(`@/assets/${Showimages[3]}`)"> 
                    <!-- <div id="memberImage" :style="{ 'background-image': 'url(' + require(`@/assets/${Showimages[3]}`) + ')' }"></div> -->
                    <div id="memberbar1">
                        <span>노기훈</span><i @click="sendMessage" class="fa-regular fa-paper-plane"></i>
                        
                    </div>
                    <p>아무말아무말마</p>
                    
                    
                </div>
                <div class="rightAbout">
                    <div class="right_box">
                        <ul class="my_profile">
                            <li><span>학과</span><span>빅데이터</span></li>
                            <li><span>학년</span><span>3학년</span></li>
                            <li><span>이메일</span><span>iamKangin@naver.com</span></li>
                        </ul>
                        </div>
                    
                    <div class="right_box">
                        <ul>
                            <li class="detail_me">
                                <div class="first_about_me">진로</div>
                                <div class="second_about_me">레알 마드리드</div>
                            </li>
                            <li class="detail_me">
                                <div class="first_about_me">관심분야</div>
                                <div class="second_about_me">배드민턴</div>
                            </li>
                            <li class="detail_me">
                                <div class="first_about_me">깃허브 링크</div>
                                <div class="second_about_me">그런거 모름</div>
                            </li>
                            <li class="detail_me">
                                <div class="first_about_me">인스타ID</div>
                                <div class="second_about_me">kangin</div>
                            </li>
                        </ul>
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

  components :{
    PageHeader,
    PageFooter,
  },
  data(){ 
    return{
        Allimages:['로니콜먼.webp','짱구.webp','도라애몽.png','루피.png','강인.jpg','김민재.jpg','릴러말즈.jpg',
        '맹구.jpg','미키마우스.jpg','뽀로로.jpg','영남회장.jpeg','피카츄.jpg'],
        data:{
        },
        // Allimages:['맹구',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        Showimages:['로니콜먼.webp','짱구.webp','도라애몽.png',
        '루피.png','강인.jpg','김민재.jpg','릴러말즈.jpg']
    }
   
        
    },
    methods:{
    getImagePath(imageFileName){
        return require(`@/assets/${imageFileName}`);
    },
    imageleft(){
        let show=this.Showimages
        let all=this.Allimages
        if(show[0]===all[0]){
            //사진 이동x
        }
        else{
            show.unshift(all[(all.indexOf(show[0]))-1]);
            show.pop();

            //사진 왼쪽으로 한개씩 당김 
            // [3,4,5]
            // < 클릭 
            // [2,3,4]
            // 마지막 요소 없애고 
            // 앞에 요소 추가 
            // 마지막 요소는 show[6]
            // 앞에 추가하는 요소는 all[(all.indexOf(show[6]))-1]
        }
        
    },
    imageright(){
        let show=this.Showimages
        let all=this.Allimages
        if(show[show.length-1]===all[all.length-1]){
            //사진 이동x
        }
        else{
            //사진 오른쪽으로 한개씩 당김
            show.push(all[(all.indexOf(show[6]))+1]);
            show.splice(0,1);
            //show[6]의 값이 11 그리고 all에서 7번째에 있으면
            //값이 11인 인덱스에서 +1 한 all의 인덱스를 가지고 옴 
            //그거를 show7번쨰 즉 show[6]에 넣음
           
        }
    },
    sendMessage(){
        //이걸 바로 라우터?
        /** 
         * 메세지 보내기의 핵심 
         * 보내는 사람 , 받는 사람 정보 
         * 메세지 정보( 받은거 , 보낸거 )
         * 전역으로 필요한 정보: 지금 로그인 한 사람 정보, 
        */
    }
  }
};

</script>
<style>
    #detailMember{
        width : 100%;
        height: 1400px;
        background-color: #F2F2F2;
    }
    .deitalMember-Content{
        padding-top: 100px;
        width: 100%;
        height: 100%;
        
    }
    .RotateMember{
        width: 100vw;
        height: 20vh;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        align-content: center;
        text-align: center;
        /* background-color: rgb(222, 231, 223); */
    }
    .RotateMember i{
        font-size: 40px;
        line-height: 20vh;
    }
    .RoundMember{
        
        width: 7vw;
        height: 7vw;
        margin: 20px 30px 20px 30px;
        border-radius: 50%;
        background-size: cover;
    }
    .RoundMember:hover{
        box-shadow: 3px 3px 3px gray;
    }
   
    .underRotate{
        margin-top: 5vw;
        margin: 3vw;
        width: 90vw; height: 80vh;
        display: flex;
    }
    .leftAbout{
        width: 26vw; height: 60vh;
        margin-right: 4vw;
        display: block;

    }
    .leftAbout img{
       
        width: 19vw; height: 42vh;
        border-radius: 20px;
    }
    /* #memberImage{
        /* 
        그냥 박스에 이미지 넣음 짤릴 수 있음
        width: 26vw; height: 40vh;
        border-radius: 10px;
        background-size:cover;
        background-position:center center;
        background-repeat: no-repeat;
        background-color: white; */

        
        /* 배경 휜색 , 이미지 잘 보임 */
        /* width: 26vw; height: 40vh;
        border-radius: 10px;
        background-size:contain;
        background-position:left;
        background-repeat: no-repeat;
        background-color: rgba(180, 148, 148, 0.267);  
        } 
    */
    #memberbar1{
        width: 22vw;
      
        height: 7vw;
        display: flex;
        justify-content:space-between;
        
    }
    #memberbar1 span{
        margin: 40px 40px 0px 0px;
        font-size: 25px;
    }
    #memberbar1 i{
        font-size: 25px;
        line-height: 7vw;
    }
    .leftAbout p{
        text-align: left;
    }
    .rightAbout{
        width: 60%; height: 60vh;
        /* background-color: rgb(215, 250, 222); */
        display: block;
        justify-content: center;

    }

    .right_box{
        justify-content: left;
        width: 100%;
        height:fit-content;
        margin: 0px 0px 20px 0px;
        border-radius: 20px;
        background-color: white;
        padding: 10px 10px 10px 0px;
        text-align: left;
}



.right_box ul{
    margin-left: 0px;
    list-style: none;
}

.my_profile span{
    display: inline-block;
    height: 40px;
    padding: 20px;
    font-size: 20px;
    width:150px;
}

.detail_me{
    display: flex;
    margin-top: 10px;
}
.first_about_me{
    width: 100px;
}
.second_about_me{
    width: 300px;
    background-color:darkgrey;
    margin-left: 40px;
    border-radius: 7px;
    padding: 0px 10px  ;
} 
   
</style>