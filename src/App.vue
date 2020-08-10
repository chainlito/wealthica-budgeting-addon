<template>
  <div id="app">
    <spending-pie-chart :categories="transactions" />
    <spending-bar-chart :categories="transactions" />
    <spending-list :categories="transactions" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SpendingPieChart from './components/SpendingPieChart.vue';
import SpendingList from './components/SpendingList.vue';
import SpendingBarChart from './components/SpendingBarChart.vue';

export default {
  components: {
    SpendingPieChart,
    SpendingList,
    SpendingBarChart,
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
@import './styles/variables.scss';

html {
  font-size: 15px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Inter';
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
  padding: 6px 10px;
}

.card {
  border: none;
  margin-bottom: 20px;
  filter: drop-shadow(0px 10px 10px rgba(72,79,100,0.07));

  &-body {
    overflow-x: auto;
  }

  &-header {
    display: flex;
    padding: 0 1rem !important;
    background-color: transparent !important;
    border-bottom: 0 !important;
    margin-top: .5rem;

    @media screen and (max-width: $tablet) {
      display: block;
    }

    &__title {
      flex: 1;

      @media screen and (max-width: $tablet) {
        display: flex;
        justify-content: space-between;
      }

      &__date {
        color: $gray;

        @media screen and (max-width: $tablet) {
          font-size: .7rem;
        }
      }
    }

    &__info {
      display: flex;

      @media screen and (max-width: $tablet) {
        display: block;
        margin-top: 1rem;
      }

      &__item {
        margin-left: 1.5rem;

        @media screen and (max-width: $tablet) {
          display: flex;
          justify-content: space-between;
        }

        &__name {
          font-size: .7rem;
          color: $gray;
        }

        &__value {
          font-size: 1.2rem;

          @media screen and (max-width: $tablet) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
