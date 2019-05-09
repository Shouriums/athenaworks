<template>
  <div class="search-bar">
    <p>Search Bar</p>
    <input type="text" v-model="searchText" @keydown="typingStarted" @keyup="typingTimer">
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
  export default {
    data() {
      return {
        searchText: '',
        typingInterval: 1000,
        typingCheck: ''
      }
    },
    methods: {
      search() {
        clearTimeout(this.typingCheck);
        this.$store.dispatch('searchBar', this.searchText);
      },
      typingStarted() {
        clearTimeout(this.typingCheck);
      },
      typingTimer() {
        this.typingCheck = setTimeout(this.search, this.typingInterval);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    display:flex;
    align-items: center;
    position: relative;
    p {
      margin-right: 15px;
    }
    input {
      padding: 0;
      margin: 0;
      height: 25px;
      width: 50%;
      border: 1px solid lightgray;
    }
  }
</style>