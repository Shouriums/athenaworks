import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedUser: '',
    fullList: [],
    filteredList: [],
    userList: []

  },
  mutations:{
    changeSelectedUser(state, context) {
      state.selectedUser = context;
      console.log(state.selectedUser)
    },
    setUserList(state, context) {
      state.userList = context;
      state.fullList = context;
      state.selectedUser = context[0];
    },
    filterList(state, payload) {
      // console.log(payload, state.filteredList, 'fulllist', state.filteredList, state.userList);
      payload = payload.toLowerCase();
      state.filteredList = state.fullList.filter((person) => {
        return person.name.first.includes(payload) || person.name.last.includes(payload)
      });
      console.log('fullList', state.fullList);
      state.userList = state.filteredList;
    }
  },
  actions: {
    async getUsers(context) {
      const response = await axios.get('https://randomuser.me/api/?results=50');
      await context.commit('setUserList', response.data.results);
    },
    changeUser(context, user){
      context.commit('changeSelectedUser', user)
    },
    searchBar(context, searchTerms) {
      context.commit('filterList', searchTerms);
    }
  }
});
