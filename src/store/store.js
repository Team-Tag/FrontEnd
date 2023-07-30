import { createStore } from 'vuex'

const store = createStore({
  state:{
    selectedCard:'',
    clickCard:[],
    countViewArticle:[
      {name:"프론트엔드 로드맵1",view_count:0},
      {name:"프론트엔드 로드맵1",view_count:0},
      {name:"프론트엔드 로드맵1",view_count:0},
      {name:"프론트엔드 로드맵1",view_count:0}
  ]
    
  },
  mutations: {
    SET_SELECTED_CARD(state, card) {
      state.selectedCard = card;
    },
  },
  actions: {
    setSelectedCard({commit},card){
      commit('SET_SELECTED_CARD',card);
    }
  },
  getters: {
    // 필요한 경우 나중에 getters를 추가할 수 있습니다.
    
    
  }
});
// this.$store.commit, this.$store.dispatch, this.$store.getters를 사용하여
// mutations, actions, getters를 호출하고 상태를 관리할 수 있습니다.
export default store;
