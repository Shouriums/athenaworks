<template>
  <div id="userInfo">
    <div class="imageBlock">
      <div class="bgImg" :style="`background: url(${selectedUser.picture.large}) no-repeat center center / cover`"></div>
      <img class="midImg" :src="`${selectedUser.picture.medium}`" alt="">
      <div class="nameInfo">
        <p class="name">{{selectedUser.name.first | capitalize}} {{selectedUser.name.last | capitalize}}</p>
      </div>
    </div>
    <div class="userGeneralInfo">
      <div class="text-block">
        <span>Email</span>
        <p class="email"> {{selectedUser.email}} </p>
      </div>
      <div class="text-block">
        <span>Cellphone</span>
        <p class="cellphone"> {{selectedUser.cell}} </p>
      </div>
      <div class="text-block">
         <span>Nationality</span>
        <p class="nationality"> {{selectedUser.nat}} </p>
      </div>
      <div class="text-block">
        <span>Location</span>
        <p class="location">{{selectedUser.location.street | capitalize}}, 
            {{selectedUser.location.city | capitalize}} 
            {{selectedUser.location.state | capitalize}} </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selectedUser : {
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .imageBlock {
      width: 100%;
      height: 50vh;
      position: relative;
      overflow: hidden;
      margin-bottom: 25px;
    .bgImg {
      width: 100%;
      height: 100%;
      filter: blur(8px);
      -webkit-filter: blur(8px);
      transform: scale(1.1);
      &:before {
        content: "";
        display: block;
        -webkit-filter: blur(1px) brightness(0.5);
        -moz-filter: blur(1px) brightness(0.5);
        -ms-filter: blur(1px) brightness(0.5);
        -o-filter: blur(1px) brightness(0.5);
        filter: blur(1px) brightness(0.5);
        position: absolute;
        left: 10px;
        top: 10px;
        right: 10px;
        bottom: 10px;
        background: inherit;
        z-index: 0;
      }
    }
    .midImg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px solid white;
      width: 150px;
      height: 150px;
    }
    .nameInfo {
      .name {
        position: absolute;
        bottom: 25px;
        color: white;
        font-size: 22px;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  .userGeneralInfo {
    .text-block {
      margin: 5px;
      span {
        margin: 10px 0;
        color: gray;
        font-weight: 300;
        font-size: 16px;
      }
      p {
        margin-bottom:5px;
        margin-top: 5px;
        font-size: 18px;
        font-weight: 600;
        color: black;
      }
    }
  }

  span {
    margin-bottom: 5px;
  }
  
</style>
