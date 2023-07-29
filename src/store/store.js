import { createStore } from 'vuex'

const store = createStore({
  state:{
    login_user:{
      name:'노기훈',
      age:23,
      학과:'빅데이터',
      학년:3,
      이메일:"hotgihoon@gmail.com",
      사진url:"@/assets/김민재.jpg",
      한줄:'가나다라마바사가나다라',
      진로:"front-end",
      관심분야:"web",
      깃허브:"github.com",
      인스타ID:"hoon"
      //
    },
    clickWorks:""
    
  },
  mutations: {
    increment(state){
      state.count++;
    },
    
    
  },
  actions: {
  },
  getters: {
    // 필요한 경우 나중에 getters를 추가할 수 있습니다.
  }
});
// this.$store.commit, this.$store.dispatch, this.$store.getters를 사용하여
// mutations, actions, getters를 호출하고 상태를 관리할 수 있습니다.
export default store;
