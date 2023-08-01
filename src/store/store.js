// import Vue from 'vue';
// import Vuex from 'vuex';
import axios from 'axios';
// Vue.use(Vuex);
import {createStore} from 'vuex'
// export default new Vuex.Store({

const store = createStore({
  state:{
    notices: [],
    currentPage: 1,
    totalPages: 0,
  },
  mutations: {
    setNotices(state, notices) {
      state.notices = notices.noticeListDTOS;
      state.totalPages = notices.totalPages;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    fetchNotices({ commit }) {
      // 서버로부터 공지사항 데이터를 가져오는 비동기 작업
      axios.get('/api/notice/list')
        .then(response => {
          commit('setNotices', response.data); // 받아온 데이터를 스토어에 저장
        })
        .catch(error => {
          console.error('Error fetching notices:', error);
        });
    }
  },
  getters: {
    hasNotices(state) {
      return state.notices.length > 0; // 게시물이 있는지 여부를 확인하여 반환
    }
    
  },
});
export default store;
