<template>
  <PageHeader/>
  <div class="Schedule">
    <div class="Schedule-Content">
      <h1>Schedule</h1>
      <div class="calendar-box">
        <div class="calendar">
          <!-- 이전 달 화살표 -->
          <div class="arrow-two">
            <span class="arrow" @click="changeMonth(-1)">&#8592;</span>
            <h2>{{ getMonthName(month) }}</h2>
            <!-- 다음 달 화살표 -->
            <span class="arrow" @click="changeMonth(1)">&#8594;</span>
          </div>
          
          <table>
            <thead>
              <tr>
                <td v-for="day in daysOfWeek" :key="day">{{ day }}</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="week in getWeeks(month,year)" :key="week">
                <td v-for="date in getDates(month,year,week)" :key="date">
                  {{ date }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="addEvent">여기는 이벤트 추가</div>
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
      year:new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      daysOfWeek:["일", "월", "화", "수", "목", "금", "토"],
    };
  },
  methods:{
    getMonthName(month){
      const months=["1월","2월","3월","4월","5월","6월","7월","8월","9월"
      ,"10월","11월","12월"];
      return months[month -1]; //12월 달라고 하면 12-1인 11번 인덱스의 값을 줘야함 
    },
    getWeeks(month,year){
      const firstDay = new Date(year,month-1,1).getDay();//해당 달의 첫번째 요일 숫자로 반환
      //->일:0, 월:1, 화:2 ,수:3...토:6
      const daysInMonth=new Date(year,month,0).getDate();//몇일 있는지 불러옴(31일)
      return Math.ceil((firstDay+daysInMonth)/7) //ceil: 반올림
    },
    getDates(month, year, week) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const start = (week - 1) * 7 - firstDay + 1;
  const end = Math.min(start + 7, daysInMonth + 1);

  const dates = [];
  for (let i = start; i < end; i++) {
    dates.push(i > 0 ? i : null);
  }

  return dates;
},

    
      // 올바른 요일에 맞추어 배열을 반환
  
      //array.from: 주어진 길이만큼 배열만듬, 콜백함수로 배열 요소 생성 
      //start를 시작으로 end-start길이 만큼의 배열을 만듬 
      //각 요소는 해당 인덱스에 start를 더한 값으로 생성됨 이렇게 생성된 배열을 해당 주차에 하단하는 날짜를 담음
  
  changeMonth(offset){
    const currentMonth = this.month;
    const currentYear=this.year;
    const newMonth=currentMonth+offset;
    if(newMonth <1){
      this.year=currentYear-1;
      this.month=12;
    }
    else if(newMonth > 12){
      this.year=currentYear+1;
      this.month=1
    }
    else{
      this.month=newMonth;
    }
  }
  },
 
};
/**
 * 달력 표시 
 * 1. date 내장객체 가져와서 1년에 있는 달(month) 가지고옴
 * 2. 현재 달 가지고 옴,해당 달로 이동해서 달이 몇일까지 있는지, 처음 시작 요일을 가지고 옴
 * 3. 현재 달 화면 출력 
 * 4.화살표 추가 
 * 저번달 클릭(다음달)
 * 요번달 -1 한 month를 가지고 온다 (이후 달력 표시와 같게 해당 달의 요일, 날짜로 박스 출력 )
 * 
 * 일정 표시 
 * 특정 색상, 날짜, 이벤트 이름 출력 
 * 
 * 일정추가(요거 그냥 우리가 fix하는게 좋을거 같음 )
 * 시작일 ,종료일 입력 받음 , 색상 부여 
 * 
 * 
 *  
 * 
 */
</script>

<style scoped>
  .Schedule{padding-top: 100px;
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
  }
  .calendar-box{
    display: flex;
  }
  .calendar{
    width: 50vw; height: 65vh;
    margin-left: 5vw;
    background-color: lightpink;  
  }
  .addEvent{
    width: 40vw; height: 65vh;
    margin-right: 5vw;
    background-color:lightcyan;  
  }
  .arrow-two{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  table{
    font-size: 30px;
    margin: auto;
    margin-top: 3vh;
    justify-content: center;
    align-content: center;
    
  }
  td{
   width: 90px;
   height: 50px;
  }
</style>