<template>
  <fragment>
    <tr class="spending-item">
      <td class="spending-item__name-cell">
        <div class="spending-item__name">{{ category ? category.category : 'Name' }}</div>
      </td>
      <td class="spending-item__budget-cell">
        <div class="spending-item__budget">{{ category ? category.amount : '$700' }} of $1000</div>
      </td>
      <td>
        <div class="spending-item__progress">
          <k-progress
            :percent="percent <= 100 ? percent : 100"
            :line-height="10"
            :show-text="false"
            :color="percent <= 100 ? '#38c432' : '#ff4128'" />
        </div>
      </td>
    </tr>
  </fragment>
</template>

<script>

export default {
  props: {
    category: {
      type: Object,
      /* required: true, */
    },
  },
  computed: {
    percent() {
      return this.category ? this.category.amount / 100 : 70;
    },
  },
};
</script>

<style lang="scss">
@import '~breakpoint-sass/stylesheets/breakpoint';

.spending-item {
  min-height: 40px;
  height: 40px;
  border-bottom: 1px solid rgba(0,0,0,.1);

  &__name {
    white-space: nowrap;
    font-size: .9333rem;
    color: #484f64;
    line-height: 1.2;
    /* font-weight: 700; */
    background-color: #eef1f7;
    border-radius: 5px;
    padding: 5px 9px;
    display: inline;

    &-cell {
      width: 30%;
      padding-right: 10px;
    }
  }

  &__budget {
    color: #a8afc2;

    &-cell {
      width: 20%;
      padding-right: 10px;
    }
  }

  &__progress {
    @include breakpoint(0 768px) {
      display: none;
    }
  }
}

.k-progress {
  margin-bottom: 0;
  margin-right: 0;
}
</style>
