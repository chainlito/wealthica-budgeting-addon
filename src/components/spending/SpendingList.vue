<template>
  <table class="spending-list">
    <tbody>
      <SpendingItem v-for="(category, index) in categories" :category="category" :key="index">
      </SpendingItem>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import SpendingItem from './SpendingItem.vue';

export default {
  components: {
    SpendingItem,
  },
  computed: {
    ...mapGetters({
      categories: 'categorizedTransactions',
    }),
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.spending-list {
  background: transparent;
  width: 100%;
  margin: 1em 0em;
  border: none;
  box-shadow: none;
  border-radius: 0.26666667rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
  border-collapse: separate;
  border-spacing: 0px;

  & tbody {
    & td {
      border-top: 1px solid #f1f1f1;
      border-bottom: 0 !important;
      padding-top: 1.35714rem !important;
      padding-bottom: 1.35714rem !important;
    }
  }
}
</style>
