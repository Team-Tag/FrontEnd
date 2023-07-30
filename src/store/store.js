import { createStore } from 'vuex'

const store = createStore({
  state:{
    selectedCard:'',
    clickCard:[],
    countViewArticle_front:[
      {view_count:0},
      {view_count:0},
      {view_count:0},
      {view_count:0},
      {view_count:0},
      {view_count:0},
      {view_count:0},
      {view_count:0}
      // vuex에서 카운트한 값이 새로고침하면 0으로 초기화를 했기때문에 다시 들어가면 0으로 됨 로컬 스토리지? 아니면 서버로 전송 필요

  ],
  countViewArticle_back:[
    {view_count:0},
    {view_count:0},
    {view_count:0},
    {view_count:0},
    {view_count:0},
    {view_count:0},
    {view_count:0},
    {view_count:0}
    // vuex에서 카운트한 값이 새로고침하면 0으로 초기화를 했기때문에 다시 들어가면 0으로 됨 로컬 스토리지? 아니면 서버로 전송 필요

]
    
  },
  mutations: {//이걸로 상태 변경 이 아니고 여기는 비동기적인 로직을 구현하고자 할때 사용
    VIEW_COUNT_UP_FRONT(state, index,) {
      state.countViewArticle_front[index].view_count++;
    },
    VIEW_COUNT_UP_BACK(state, index,) {
      state.countViewArticle_back[index].view_count++;
    },
  },
  actions: {//이거 호출
    viewCountUpFront({commit},index){
      commit('VIEW_COUNT_UP_FRONT',index);
    },
    viewCountUpBack({commit},index){
      commit('VIEW_COUNT_UP_BACK',index);
    }
  },
  getters: {
    // 필요한 경우 나중에 getters를 추가할 수 있습니다.
    
    
  }
});
// this.$store.commit, this.$store.dispatch, this.$store.getters를 사용하여
// mutations, actions, getters를 호출하고 상태를 관리할 수 있습니다.
export default store;
