<template>
  <div id="app" class="container">
    <SpendingChart :categories="transactions" />
    <div class="container-bottom">
      <SpendingList class="container-bottom__left" />
    </div>
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

.container {
  &-bottom {
    display: flex;

    &__left {
      width: 100%;
    }

    &__right {
      display: none;
      width: 50%;
    }
  }
}
</style>
