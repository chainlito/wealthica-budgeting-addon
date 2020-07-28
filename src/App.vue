<template>
  <div id="app">
    <span>Hello World</span>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('initAddon');
    // eslint-disable-next-line
    console.debug(this.$store);
  },
};
</script>
