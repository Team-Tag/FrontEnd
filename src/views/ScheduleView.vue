<template>
    <PageHeader/>
    <div class="Schedule">
        <div class="Schedule-Content">
        <h1>Schedule</h1>
        <div>
          <div></div>
          <div></div>
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
  }
};
/**자주하는 질문
 * 태그팀 지원은 언제 받나요?
 * 워크샵때는 어떤 활동을 하나요?
 * 태그팀 회식 자주 있나요?
 * 씨애랑 학생회는 언제 선발하나요?
 * 소프트웨어 전시회는 언제인가요?
 * 겨울방학때는 어떤 활동을 하나요?
 * 
 */
</script>

<style scoped>
  .Schedule-Content{
      padding-top: 100px;
  }
  .Schedule{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
</style>