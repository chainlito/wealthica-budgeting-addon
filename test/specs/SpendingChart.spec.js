import { shallowMount } from '@vue/test-utils';
import SpendingChart from '@/components/SpendingChart.vue';

const DEFAULT_DATA = [{
  category: 'Category 1',
  amount: 100,
  max_amount: 150,
}, {
  category: 'Category 2',
  amount: 200,
  max_amount: 150,
}, {
  category: 'Category 3',
  amount: 500,
  max_amount: 100,
}];

describe('SpendingChart.vue', () => {
  it('draw spending chart with props', () => {
    const wrapper = shallowMount(SpendingChart, {
      propsData: {
        categories: DEFAULT_DATA,
      },
    });
    expect(wrapper.find('.chart__wrap').exists()).toBe(true);
  });
});
