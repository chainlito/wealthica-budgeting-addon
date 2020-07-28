<template>
  <div id="app">
    <span>Hello World</span>
  </div>
</template>

<script>
export default {
  created() {
    console.log('a');
    this.$store.dispatch('initAddon');
    console.debug(this.$store);
  },
};
</script>
