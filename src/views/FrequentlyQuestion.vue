<template>
    <PageHeader/>
    <div class="Question">
        <h2 class="menu-title">&#60;자주하는 질문&#47;&#62;</h2>
    <div class="accordion">
        <p>태그팀에 대해 자주 문의하는 질문을 정리해 보았습니다.</p>
        <p>질문을 클릭해 답변을 확인 해주세요</p>
        <ul>
            <li :class="{'on': activeIndex === 0}" @click="toggleAccordion(0)">
                <div class="title"><span>아코디언을 만드는 방법을 알려주세요</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">JavaScript는 HTML과 CSS를 조작하거나, 이벤트를 처리하기 위한 프로그래밍 언어입니다. 
                    이번 예제에서는 각 제목 요소에 click 이벤트를 추가하고, 
                    클릭된 항목과 나머지 항목의 클래스를 조작하여 아코디언 메뉴의 동작을 구현하는 JavaScript 코드를 간단히 설명하겠습니다.
                    먼저, 아코디언 메뉴를 담고 있는 div 요소를 찾아 변수에 할당합니다.
                </div>
            </li>
            <li :class="{'on': activeIndex === 1}" @click="toggleAccordion(1)">
                <div class="title"><span>제목2</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">내용2</div>
            </li>
            <li :class="{'on': activeIndex === 2}" @click="toggleAccordion(2)">
                <div class="title"><span>제목3</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">내용3</div>
            </li>
        </ul>
    </div>
    </div>
    <PageFooter/>
</template>

<script>
import { ref } from 'vue';
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

export default {
    components: {
        PageHeader,
        PageFooter,
    },
    setup() {
        const activeIndex = ref(0);
        
        function toggleAccordion(index) {
            activeIndex.value = activeIndex.value === index ? -1 : index;
        }

        return {
            activeIndex,
            toggleAccordion,
        };
    }
};
</script>

<style scoped>
  .Question {
    background-color: #F2F2F2;
    width: 100%;
    height: 1024px;
    padding-top: 100px;
  }
  /* .LoadMap-Content {
    display: flex;
    justify-content: center;
  } */
  .menu-title {
    font-size: 40px;
  } 
  .accordion {
    margin: auto;
    margin-top: 20px;
    text-align: center;
    background-color: #99999930;
    width: 60vw;
  }
  .accordion p{
    background-color: #F2F2F2;
    font-size: 20px;
    padding-bottom: 10px;
  }
  .accordion span{
    width: 96%;
    text-align: start;
  }
    .accordion ul{
        padding:0px
    }
  .accordion ul > li {
    overflow: hidden;
    max-height: 40px;
    transition: 0.3s;
  }
  .accordion ul > li.on {
    max-height: 600px;
  }
  .accordion ul > li .title {
    background-color: rgb(190, 189, 186);
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }
  .accordion ul > li .desc {
    padding: 0.5rem;
  }
</style>
