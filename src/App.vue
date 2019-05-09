<template>
  <main id="app" class="container">
    <section class="users w-50">
      <article class="general-info">
        <h1>Users</h1>
        <p>If you want to get the contact information to an specific user, just select group and then select him / her from the list below</p>
      </article>
      <article>
        <user-list @userSwitched="changeUser" ></user-list>
      </article>
    </section>

    <section class="user-info w-50">
      <user-info :selectedUser="this.$store.state.selectedUser"></user-info>
    </section>
  </main>
</template>

<script>
import userInfo from '@/components/userInfo'
import userList from '@/components/userList'

export default {
  name: "app",
  components: {
    userInfo,
    userList
  },
  methods: {
    changeUser(newUser) {
      this.$store.dispatch('changeUser', newUser);
    }
  }
};
</script>

<style lang="scss">
.container {
  max-width: 80%;
  margin-left: 10%;
  display: flex;
  padding: 15px;
  .w-50 {
    width: 50%;
    padding: 15px;
  }
  .general-info {
    h1 {

    }
  }
}
  p, h1, h2, h3, h4, h5, h6, span {
    font-family: Helvetica, Arial, sans-serif;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-wrap: wrap-reverse;
      .w-50 {
        width: 100%;
      }
    }
  }
</style>
