<template>
  <b-card>
    <table class="spending-list">
      <thead>
        <tr>
          <th>Category</th>
          <th>Total Spent</th>
          <th>Total Budget</th>
          <th>Saving / Exceeds</th>
        </tr>
      </thead>
      <tbody>
        <SpendingItem v-for="(category, index) in categories" :category="category" :key="index">
        </SpendingItem>
      </tbody>
    </table>
  </b-card>
</template>

<script>
import SpendingItem from './SpendingItem.vue';

export default {
  components: {
    SpendingItem,
  },

  props: ['categories'],
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

  & thead {
    & th {
      font-size: 14px;
      letter-spacing: 1px;
      color: #14171a;
      font-weight: 500;
      padding-top: 1.35714rem !important;
      padding-bottom: 1.35714rem !important;

      &:first-child {
        padding-left: 1rem;
      }

      &:last-child {
        padding-right: 1rem;
      }
    }
  }
  & tbody {
    & td {
      border-top: 0 !important;
      border-bottom: 1px solid #f1f1f1;
      padding-top: 1.35714rem !important;
      padding-bottom: 1.35714rem !important;
    }
  }
}
</style>
