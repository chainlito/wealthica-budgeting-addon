<template>
  <div id="app" class="container">
    <SpendingChart :categories="transactions" />
    <SpendingList :categories="transactions" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SpendingChart from './components/spending/SpendingChart.vue';
import SpendingList from './components/spending/SpendingList.vue';

export default {
  components: {
    SpendingChart,
    SpendingList,
  },
  computed: {
    ...mapGetters({
      transactions: 'categorizedTransactions',
    }),
  },
  created() {
    this.$store.dispatch('getTransactionsList', null, { root: true });
  },
};
</script>

<style lang="scss">
@import '~breakpoint-sass/stylesheets/breakpoint';
@import './styles/variables.scss';

html {
  font-size: 15px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  min-width: 0;
  font-size: 15px;
  line-height: 1.4285em;
  color: $dark-text-color;
  margin: 0;
  padding: 0;

  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  padding-top: 6px;
}

.card {
  border: none;
  margin-bottom: 20px;
  filter: drop-shadow(0px 10px 13px rgba(72,79,100,0.07));

  &-body {
    overflow-x: auto;
  }
}
</style>
