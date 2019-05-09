<template>
  <div id="user-list-wrapper">
    <search-bar></search-bar>

    <div class="user-list">
      <div class="list-item" 
        v-for="user in this.$store.state.userList" :key="user.cell"
        @click="$emit('userSwitched', user)">
        <img :src="`${user.picture.thumbnail}`" alt="picture">
        <p>{{ user.name.first | capitalize}} {{ user.name.last | capitalize }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import searchBar from './searchBar';

  export default {
    data() {
      return {
        selectedUser: ''
      }
    },
    components: {
      searchBar
    },
    beforeCreate() {
      this.$store.dispatch('getUsers');
    }
  }
</script>

<style lang="scss" scoped>
  .user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-height: 70vh;
    overflow-y: scroll;
    .list-item {
      display: flex;
      width: 45%;
      padding: 10px;
      margin-bottom: 15px;
      margin-top: 15px;
      img {
        border-radius: 50%;
        max-height: 50px;
        margin: auto 0;
        margin-right: 15px;
      }
      p {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 500;
      }
      &:hover {
        cursor: pointer;
        background-color: #f7f5f5;
      }
    }
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
  
</style>
