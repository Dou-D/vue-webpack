<template lang="pug">
  <div class="hello">
    <h3>{{ message }}</h3>
  </div>
</template>

<script lang="typescript">
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
  methods: {
    sayhi: () =>  {
      return "hi!";
    }
  }
};
</script>

<style lang="less">
h3 {
  margin: 40px 0 0;
  color: #42b983;
  span {
    font-weight: normal;
  }
}
</style>
