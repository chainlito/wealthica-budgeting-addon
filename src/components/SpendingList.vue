<template>
  <b-card v-if="categories.length > 0">
    <div class="card-header">
      <div class="card-header__title">
        <h5>{{ $t('categorized_transactions') }}</h5>
        <span class="card-header__title__date">
          {{ formatMonth(selectedDate) }}
        </span>
      </div>
      <div class="card-header__info">
        <div class="card-header__info__item">
          <span class="card-header__info__item__name">
            {{ $t('budget') }}
          </span>
          <p class="card-header__info__item__value">
            {{ formatPrice(sumAmount(categories, 'max_amount')) }}
          </p>
        </div>
        <div class="card-header__info__item">
          <span class="card-header__info__item__name">
            {{ $t('spendings') }}
          </span>
          <p class="card-header__info__item__value">
            {{ formatPrice(sumAmount(categories, 'amount')) }}
          </p>
        </div>
      </div>
    </div>
    <table class="spending-list">
      <thead>
        <tr>
          <th>{{ $t('category') }}</th>
          <th>{{ $t('budget') }}</th>
          <th>{{ $t('spendings') }}</th>
          <th>{{ $t('saving') }}</th>
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
import { formatMonth, sumAmount, formatPrice } from '@/utils';
import SpendingItem from './SpendingItem.vue';

export default {
  components: {
    SpendingItem,
  },

  props: ['categories', 'selectedDate'],

  methods: {
    formatMonth,
    formatPrice,
    sumAmount,
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

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
      color: $dark-text-color;
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
      border-bottom: 1px solid $light-border-color;
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
}
</style>
