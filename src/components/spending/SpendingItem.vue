<template>
  <tr class="spending-item">
    <td class="spending-item__name-cell">
      <div class="spending-item__name">{{ category.category }}</div>
    </td>
    <td class="spending-item__budget-cell">
      <div class="spending-item__budget">$700 of $1000</div>
    </td>
    <td>
      <div>
        <k-progress :percent="70" :line-height="10" :show-text="false" :color="'#38c432'" />
      </div>
    </td>
  </tr>
</template>

<script>

export default {
  props: {
    category: {
      type: Object,
      /* required: true, */
    },
  },
};
</script>

<style lang="scss">
.spending-item {
  min-height: 40px;
  height: 40px;

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
}

.k-progress {
  margin-bottom: 0;
  margin-right: 0;
}
</style>
